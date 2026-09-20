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
		"content": `<style>.mh8-grb_d {
  fill: currentColor;
  d: path("M7 16a2 2 0 1 1-4 0a2 2 0 0 1 4 0m0-8a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0m0-8a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0m0-8a2 2 0 1 1-4 0a2 2 0 0 1 4 0");
}
</style><path class="mh8-grb_d"/>`,
		"fallback": "fluent:re-order-dots-horizontal-24-filled",
	});
}

export default Component;
