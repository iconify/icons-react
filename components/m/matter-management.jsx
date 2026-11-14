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
		"content": `<style>.h9wrf84-d {
  d: path("M3 9.5a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m1jakwbeg {
  d: path("M12.75 9.5v-6H17l1.75 1.75V9.5");
}
</style><g class="hntgybcog"><path class="h9wrf84-d"/><path class="m1jakwbeg"/></g>`,
		"fallback": "uix:matter-management",
	});
}

export default Component;
