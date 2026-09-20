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
		"content": `<style>.gaaqhvbvj {
  fill: currentColor;
  d: path("M211.81 83.79a28 28 0 0 1-33.12 4.83l-90.07 90.07a28 28 0 1 1-44.43-6.48a28 28 0 0 1 33.12-4.83l90.07-90.07a28 28 0 1 1 44.43 6.48");
}
</style><path class="gaaqhvbvj"/>`,
		"fallback": "ph:line-segment-fill",
	});
}

export default Component;
