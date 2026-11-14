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
		"content": `<style>.cbib95b3k {
  d: path("M3.5 12a6 1.75 0 0 1 12 0v7.5a6 1.75 0 0 1-12 0Z");
}

.dj2se7b1y {
  d: path("M7.625 4h3.75A2.625 2.625 0 0 1 14 6.625v1a2.625 2.625 0 0 1-2.625 2.625h-3.75A2.625 2.625 0 0 1 5 7.625v-1A2.625 2.625 0 0 1 7.625 4M15.5 15.5H20m0-2v4m-16.5-2a6 1.75 0 0 0 12 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="cbib95b3k"/><path class="dj2se7b1y"/></g>`,
		"fallback": "uix:pool-pump",
	});
}

export default Component;
