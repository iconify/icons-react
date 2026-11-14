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
		"content": `<style>.ez8q0kmix {
  d: path("M11.75 3.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M8.5 15.25l3-3l1-4.25m-1 4.25l3 3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j-_m0ie4s {
  d: path("m9 9.5l3.25-.75l3.25 1.75M3 18.5h18m-18 3h18");
}
</style><g class="hntgybcog"><path class="ez8q0kmix"/><path class="j-_m0ie4s"/></g>`,
		"fallback": "uix:pedestrian-rail-crossing",
	});
}

export default Component;
