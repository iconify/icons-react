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

.irjaribfd {
  d: path("M4.5 16v5.5h15V16m-5-4V9.5H17V14m-1.25-7.5v-4m-2 2l2-2l2 2");
}

.xfkpu2byp {
  d: path("M2.5 17.5L12 10l9.5 7.5");
}
</style><g class="hntgybcog"><path class="xfkpu2byp"/><path class="irjaribfd"/></g>`,
		"fallback": "uix:roof-vent",
	});
}

export default Component;
