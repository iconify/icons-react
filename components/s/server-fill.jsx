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
		"content": `<style>.mh5rrdbky {
  fill: currentColor;
  d: path("M2 6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Zm5 0a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2ZM2 16a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Zm5 0a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Z");
}
</style><path class="mh5rrdbky"/>`,
		"fallback": "coolicons:server-fill",
	});
}

export default Component;
