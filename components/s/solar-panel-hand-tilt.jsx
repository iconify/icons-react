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
		"content": `<style>.fvq6e38nl {
  d: path("m3.658 10.026l2-6A1.5 1.5 0 0 1 7.081 3h10.838a1.5 1.5 0 0 1 1.423 1.974l-2 6A1.5 1.5 0 0 1 15.919 12H5.081a1.5 1.5 0 0 1-1.423-1.974M4.5 7.5h14M13 3l-3 9m0 0v7m-3.5 0h6m3-.5a3 3 0 1 0 3-3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y_upgabkn {
  d: path("M19.75 14.25L18.5 15.5l1.25 1.25");
}
</style><g class="hntgybcog"><path class="fvq6e38nl"/><path class="y_upgabkn"/></g>`,
		"fallback": "uix:solar-panel-hand-tilt",
	});
}

export default Component;
