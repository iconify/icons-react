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

.k4nk-sxxv {
  d: path("M5.5 14L8 12.5l2.5 1.5l2.5-1.5l2.5 1.5l2.5-1.5");
}

.rm49aj31c {
  d: path("M5.5 8h13l-1 12.5h-11ZM9 8V6a3 3 0 0 1 6 0v2");
}
</style><g class="hntgybcog"><path class="rm49aj31c"/><path class="k4nk-sxxv"/></g>`,
		"fallback": "uix:takeaway-bag",
	});
}

export default Component;
