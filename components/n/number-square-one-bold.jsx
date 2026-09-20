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
		"content": `<style>.u6wq8bb2d {
  fill: currentColor;
  d: path("M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176H52V52h152ZM98 102.66A12 12 0 0 1 101.34 86l24-16A12 12 0 0 1 144 80v96a12 12 0 0 1-24 0v-73.58l-5.34 3.58A12 12 0 0 1 98 102.66");
}
</style><path class="u6wq8bb2d"/>`,
		"fallback": "ph:number-square-one-bold",
	});
}

export default Component;
