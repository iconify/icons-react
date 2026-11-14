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
		"content": `<style>.a6k62accz {
  d: path("M18 16.5V18l1.25 1");
}

.csddihb4s {
  d: path("M2.5 16.5a12 12 0 0 1 14-14a12 12 0 0 1-14 14m4-4l6-6m-6 4l2 2m0-4l2 2m0-4l2 2m2.25 9.5a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="csddihb4s"/><path class="a6k62accz"/></g>`,
		"fallback": "uix:rugby-ball-clock",
	});
}

export default Component;
