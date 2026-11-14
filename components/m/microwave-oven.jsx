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
		"content": `<style>.bt6idx30d {
  d: path("M7.75 8h5a1.75 1.75 0 0 1 1.75 1.75v4.5A1.75 1.75 0 0 1 12.75 16h-5A1.75 1.75 0 0 1 6 14.25v-4.5A1.75 1.75 0 0 1 7.75 8M17 9h.01M17 12h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.u6_jkr2cj {
  d: path("M7.375 5h9.25A4.375 4.375 0 0 1 21 9.375v5.25A4.375 4.375 0 0 1 16.625 19h-9.25A4.375 4.375 0 0 1 3 14.625v-5.25A4.375 4.375 0 0 1 7.375 5");
}
</style><g class="hntgybcog"><path class="u6_jkr2cj"/><path class="bt6idx30d"/></g>`,
		"fallback": "uix:microwave-oven",
	});
}

export default Component;
