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
		"content": `<style>.bykztlz8l {
  fill: currentColor;
  d: path("M34 64a6 6 0 0 1 6-6h176a6 6 0 0 1 0 12H40a6 6 0 0 1-6-6m102 58H40a6 6 0 0 0 0 12h96a6 6 0 0 0 0-12m0 64H40a6 6 0 0 0 0 12h96a6 6 0 0 0 0-12m110-26a6 6 0 0 1-2.82 5.09l-64 40A6 6 0 0 1 170 200v-80a6 6 0 0 1 9.18-5.09l64 40A6 6 0 0 1 246 160m-17.32 0L182 130.83v58.34Z");
}
</style><path class="bykztlz8l"/>`,
		"fallback": "ph:queue-light",
	});
}

export default Component;
