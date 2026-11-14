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
		"content": `<style>.g7ug3qq5h {
  d: path("M3 10h18l-2 10.5H5Zm1 5.25h16M7.5 10V6.5l2.5-2h4l2.5 2V10");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wpl78zkdi {
  d: path("m10 4.5l2 2l2-2");
}
</style><g class="hntgybcog"><path class="g7ug3qq5h"/><path class="wpl78zkdi"/></g>`,
		"fallback": "uix:laundry-basket",
	});
}

export default Component;
