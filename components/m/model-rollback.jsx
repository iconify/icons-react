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
		"content": `<style>.bqh21rb9k {
  d: path("m12.171 3.335l4.646 2.323a1.5 1.5 0 0 1 0 2.684l-4.646 2.323a1.5 1.5 0 0 1-1.342 0L6.183 8.342a1.5 1.5 0 0 1 0-2.684l4.646-2.323a1.5 1.5 0 0 1 1.342 0M3.5 11l8 4l3.18-1.59m2.326-1.163L19.5 11m-16 4l8 4l1.391-.696M17 15l-1.75 1.75L17 18.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mp00spb4u {
  d: path("M15.25 16.75H19a2.5 2.5 0 0 1 0 5h-2.5");
}
</style><g class="hntgybcog"><path class="bqh21rb9k"/><path class="mp00spb4u"/></g>`,
		"fallback": "uix:model-rollback",
	});
}

export default Component;
