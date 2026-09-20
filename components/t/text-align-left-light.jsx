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
		"content": `<style>.qpufvlbhs {
  fill: currentColor;
  d: path("M34 64a6 6 0 0 1 6-6h176a6 6 0 0 1 0 12H40a6 6 0 0 1-6-6m6 46h128a6 6 0 0 0 0-12H40a6 6 0 0 0 0 12m176 28H40a6 6 0 0 0 0 12h176a6 6 0 0 0 0-12m-48 40H40a6 6 0 0 0 0 12h128a6 6 0 0 0 0-12");
}
</style><path class="qpufvlbhs"/>`,
		"fallback": "ph:text-align-left-light",
	});
}

export default Component;
