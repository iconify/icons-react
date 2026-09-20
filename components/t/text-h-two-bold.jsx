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
		"content": `<style>.h-0dt8ogw {
  fill: currentColor;
  d: path("M156 56v120a12 12 0 0 1-24 0v-48H52v48a12 12 0 0 1-24 0V56a12 12 0 0 1 24 0v48h80V56a12 12 0 0 1 24 0m84 140h-24l28.74-38.33A36 36 0 1 0 182.05 124a12 12 0 0 0 22.63 8a11.7 11.7 0 0 1 1.73-3.22a12 12 0 1 1 19.15 14.46L182.4 200.8A12 12 0 0 0 192 220h48a12 12 0 0 0 0-24");
}
</style><path class="h-0dt8ogw"/>`,
		"fallback": "ph:text-h-two-bold",
	});
}

export default Component;
