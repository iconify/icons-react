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
		"content": `<style>.m8ehdcbdp {
  fill: currentColor;
  d: path("M20 17.17L18.83 16H4V4h16zM20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2");
}
</style><path class="m8ehdcbdp"/>`,
		"fallback": "ic:outline-mode-comment",
	});
}

export default Component;
