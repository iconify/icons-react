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
		"content": `<style>.dtuwr4b8m {
  d: path("M4 15.5V10l1.75-3.5l2.75-2l2.75 2L13 10v5.5Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ixkeuobyk {
  d: path("M8.5 11.5zA1.5 1.5 0 0 1 10 13v1a1.5 1.5 0 0 1-1.5 1.5A1.5 1.5 0 0 1 7 14v-1a1.5 1.5 0 0 1 1.5-1.5M13 11q4-4 8.5-1m-19 10Q8 17.5 13 19q4.5 1.5 8.5-2");
}
</style><g class="hntgybcog"><path class="dtuwr4b8m"/><path class="ixkeuobyk"/></g>`,
		"fallback": "uix:rural-landscape",
	});
}

export default Component;
