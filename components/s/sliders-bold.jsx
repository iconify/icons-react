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
		"content": `<style>.jqrv-ib0r {
  fill: currentColor;
  d: path("M68 102.06V40a12 12 0 0 0-24 0v62.06a36 36 0 0 0 0 67.88V216a12 12 0 0 0 24 0v-46.06a36 36 0 0 0 0-67.88M56 148a12 12 0 1 1 12-12a12 12 0 0 1-12 12m108-60a36.07 36.07 0 0 0-24-33.94V40a12 12 0 0 0-24 0v14.06a36 36 0 0 0 0 67.88V216a12 12 0 0 0 24 0v-94.06A36.07 36.07 0 0 0 164 88m-36 12a12 12 0 1 1 12-12a12 12 0 0 1-12 12m108 68a36.07 36.07 0 0 0-24-33.94V40a12 12 0 0 0-24 0v94.06a36 36 0 0 0 0 67.88V216a12 12 0 0 0 24 0v-14.06A36.07 36.07 0 0 0 236 168m-36 12a12 12 0 1 1 12-12a12 12 0 0 1-12 12");
}
</style><path class="jqrv-ib0r"/>`,
		"fallback": "ph:sliders-bold",
	});
}

export default Component;
