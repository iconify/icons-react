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
		"content": `<style>.k2yckhkgl {
  fill: currentColor;
  d: path("M232 170h-10V72a22 22 0 0 0-22-22H56a22 22 0 0 0-22 22v98H24a6 6 0 0 0-6 6v16a22 22 0 0 0 22 22h176a22 22 0 0 0 22-22v-16a6 6 0 0 0-6-6M46 72a10 10 0 0 1 10-10h144a10 10 0 0 1 10 10v98H46Zm180 120a10 10 0 0 1-10 10H40a10 10 0 0 1-10-10v-10h196ZM150 88a6 6 0 0 1-6 6h-32a6 6 0 0 1 0-12h32a6 6 0 0 1 6 6");
}
</style><path class="k2yckhkgl"/>`,
		"fallback": "ph:laptop-light",
	});
}

export default Component;
