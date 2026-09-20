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
		"content": `<style>.rlwoq1bji {
  fill: currentColor;
  d: path("M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m44-124v80a12 12 0 0 1-24 0v-28h-40v28a12 12 0 0 1-24 0V88a12 12 0 0 1 24 0v28h40V88a12 12 0 0 1 24 0");
}
</style><path class="rlwoq1bji"/>`,
		"fallback": "ph:letter-circle-h-bold",
	});
}

export default Component;
