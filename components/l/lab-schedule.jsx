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

.m44m2hbnv {
  d: path("M8.25 10.5h7.5a1.75 1.75 0 0 1 1.75 1.75A1.75 1.75 0 0 1 15.75 14h-7.5a1.75 1.75 0 0 1-1.75-1.75a1.75 1.75 0 0 1 1.75-1.75M6.5 17h6");
}

.xlc571slo {
  d: path("M6.5 4h11A3.5 3.5 0 0 1 21 7.5V18a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 18V7.5A3.5 3.5 0 0 1 6.5 4M8 2.5V6m8-3.5V6");
}
</style><g class="hntgybcog"><path class="xlc571slo"/><path class="m44m2hbnv"/></g>`,
		"fallback": "uix:lab-schedule",
	});
}

export default Component;
