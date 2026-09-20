import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.x0rrx1bjq {
  fill: currentColor;
  d: path("M224 160v48a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16v-48a16 16 0 0 1 16-16h72V95.19a40 40 0 1 1 16 0V144h72a16 16 0 0 1 16 16m-64-40a8 8 0 0 0 8 8h32a8 8 0 0 0 0-16h-32a8 8 0 0 0-8 8");
}
</style><path class="x0rrx1bjq"/>`,
		"fallback": "ph:joystick-fill",
	});
}

export default Component;
