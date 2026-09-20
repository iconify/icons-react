import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.p8n6gwang {
  fill: var(--svg-color--ff1e43, #ff1e43);
  d: path("M8.143 3H4.607l10.286 18h4.5V3h-3.214v13.822z");
}
</style><path class="p8n6gwang"/>`,
		"fallback": "token-branded:vib",
	});
}

export default Component;
