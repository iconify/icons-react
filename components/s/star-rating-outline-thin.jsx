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

.hufxdfd1k {
  d: path("m6.5 8 2 2 -2 2 -2 -2Z");
}

.nesq7qlnx {
  d: path("m17.5 8 2 2 -2 2 -2 -2Z");
}

.u4sowhi7h {
  d: path("M4 16h16");
}

.x7bkced7s {
  d: path("m12 8 2 2 -2 2 -2 -2Z");
}
</style><g class="hntgybcog"><path class="hufxdfd1k"/><path class="x7bkced7s"/><path class="nesq7qlnx"/><path class="u4sowhi7h"/></g>`,
		"fallback": "iconmind:star-rating-outline-thin",
	});
}

export default Component;
