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

.kgq6iwbtx {
  d: path("M8 15v-3h8v3");
}

.lqcp5xb1v {
  d: path("M4 3h16");
}

.r182r524c {
  d: path("M7 9h10");
}

.t3vzob-fn {
  d: path("M2 12a6 6 0 0 1 6 -6h8a6 6 0 0 1 6 6 6 6 0 0 1 -6 6H8a6 6 0 0 1 -6 -6");
}
</style><g class="hntgybcog"><path class="lqcp5xb1v"/><path class="t3vzob-fn"/><path class="r182r524c"/><path class="kgq6iwbtx"/></g>`,
		"fallback": "iconmind:root-span-outline-thin",
	});
}

export default Component;
