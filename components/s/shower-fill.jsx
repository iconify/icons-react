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
		"content": `<style>.j4s2kcuwf {
  fill: currentColor;
  d: path("M64 236a12 12 0 1 1-12-12a12 12 0 0 1 12 12m20-44a12 12 0 1 0 12 12a12 12 0 0 0-12-12m-64 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12m32-32a12 12 0 1 0 12 12a12 12 0 0 0-12-12M248 32h-32a8 8 0 0 0-5.66 2.34l-30.2 30.2L53.38 86.19a16 16 0 0 0-8.69 27.1l98 98a16 16 0 0 0 27.09-8.66l21.68-126.77L219.31 48H248a8 8 0 0 0 0-16");
}
</style><path class="j4s2kcuwf"/>`,
		"fallback": "ph:shower-fill",
	});
}

export default Component;
