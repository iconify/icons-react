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
		"content": `<style>.hnrbi1ejn {
  fill: currentColor;
  d: path("M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m16-132v96a12 12 0 0 1-24 0v-73.58l-5.34 3.58a12 12 0 0 1-13.32-20l24-16A12 12 0 0 1 144 80");
}
</style><path class="hnrbi1ejn"/>`,
		"fallback": "ph:number-circle-one-bold",
	});
}

export default Component;
