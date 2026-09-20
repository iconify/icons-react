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
		"content": `<style>.qu-0vpold {
  fill: var(--svg-color--277fe3, #277fe3);
  d: path("M12 10.105V3L6.316 13.895H12V21l5.684-10.895z");
}
</style><path class="qu-0vpold"/>`,
		"fallback": "token-branded:strk",
	});
}

export default Component;
