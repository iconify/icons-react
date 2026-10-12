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

.n7-danb4h {
  d: path("M7 13.75c1.25-.8 2.5.8 3.75 0s2.5.8 3.75 0s1.75-.8 2.5 0");
}

.rs_un_b_x {
  d: path("M9.75 3h4.5a.75.75 0 0 1 0 1.5h-.5v2.6c2.9.9 4.75 3.65 4.75 7.15c0 4.1-2.8 7-6.5 7s-6.5-2.9-6.5-7c0-3.5 1.85-6.25 4.75-7.15V4.5h-.5a.75.75 0 0 1 0-1.5");
}
</style><g class="hntgybcog"><path class="rs_un_b_x"/><path class="n7-danb4h"/></g>`,
		"fallback": "iconoven:matka",
	});
}

export default Component;
