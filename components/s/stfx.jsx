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
		"content": `<style>.a2nf30btz {
  fill: var(--svg-color--00dd73, #00dd73);
  d: path("m12 4.969l9 14.062H3z");
}
</style><path class="a2nf30btz"/>`,
		"fallback": "token-branded:stfx",
	});
}

export default Component;
