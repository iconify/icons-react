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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.obv2n6bhx {
  d: path("M5.5 8.5V3h13v5.5");
}

.tm99yhbzp {
  d: path("M10.518 6h2.964a1.75 1.75 0 0 1 1.733 1.503l.5 3.5A1.75 1.75 0 0 1 13.982 13h-3.964a1.75 1.75 0 0 1-1.733-1.997l.5-3.5A1.75 1.75 0 0 1 10.518 6M9.5 16L7 21.5m7.5-5.5l2.5 5.5");
}
</style><g class="hntgybcog"><path class="obv2n6bhx"/><path class="tm99yhbzp"/></g>`,
		"fallback": "uix:spotlight",
	});
}

export default Component;
