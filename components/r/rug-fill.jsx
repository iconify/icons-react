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
		"content": `<style>.uaszzcp9o {
  fill: currentColor;
  d: path("M200 16a8 8 0 0 0-8 8v16h-32V24a8 8 0 0 0-16 0v16h-32V24a8 8 0 0 0-16 0v16H64V24a8 8 0 0 0-16 0v208a8 8 0 0 0 16 0v-16h32v16a8 8 0 0 0 16 0v-16h32v16a8 8 0 0 0 16 0v-16h32v16a8 8 0 0 0 16 0V24a8 8 0 0 0-8-8m-44.57 114.06l-24 40a4 4 0 0 1-6.86 0l-24-40a4 4 0 0 1 0-4.12l24-40a4 4 0 0 1 6.86 0l24 40a4 4 0 0 1 0 4.12");
}
</style><path class="uaszzcp9o"/>`,
		"fallback": "ph:rug-fill",
	});
}

export default Component;
