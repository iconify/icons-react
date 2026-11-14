import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bagi8_bzn {
  d: path("M6.75 11a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm8 7l2 2L21 15.75");
}

.kiyaizo_l {
  d: path("M21 11.813V3.5H10.5L3 11l7.5 7.5h.787");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="kiyaizo_l"/><path class="bagi8_bzn"/></g>`,
		"fallback": "uix-sharp:standard-cost",
	});
}

export default Component;
