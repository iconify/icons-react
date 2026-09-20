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
		"content": `<style>.qhpe904pp {
  fill: currentColor;
  d: path("M80 172a12 12 0 1 1-12-12a12 12 0 0 1 12 12m40 0a52 52 0 1 1-52-52a52.06 52.06 0 0 1 52 52m-24 0a28 28 0 1 0-28 28a28 28 0 0 0 28-28m152 16a36 36 0 0 1-71.77 4H144a8 8 0 0 1-8-8v-12a68.07 68.07 0 0 0-68-68H40a8 8 0 0 1 0-16h8V56h-8a8 8 0 0 1 0-16h120a8 8 0 0 1 0 16h-8v41.88l24 6.5V72a8 8 0 0 1 16 0v36.71l36.39 9.86l.21.06A15.89 15.89 0 0 1 240 134v31.46a35.8 35.8 0 0 1 8 22.54m-20 0a16 16 0 1 0-16 16a16 16 0 0 0 16-16");
}
</style><path class="qhpe904pp"/>`,
		"fallback": "ph:tractor-fill",
	});
}

export default Component;
