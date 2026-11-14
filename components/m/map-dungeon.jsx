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
		"content": `<style>.aw-ub0vem {
  d: path("m4.026 4.658l4.5-1.5a1.5 1.5 0 0 1 .948 0l5.052 1.684a1.5 1.5 0 0 0 .948 0l3.552-1.184A1.5 1.5 0 0 1 21 5.081v12.838a1.5 1.5 0 0 1-1.026 1.423l-4.5 1.5a1.5 1.5 0 0 1-.948 0l-5.052-1.684a1.5 1.5 0 0 0-.948 0l-3.552 1.184A1.5 1.5 0 0 1 3 18.919V6.081a1.5 1.5 0 0 1 1.026-1.423");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o0za0bc4z {
  d: path("M8 16.25V13.5a4 4 0 0 1 8 0v2.75Z");
}
</style><g class="hntgybcog"><path class="aw-ub0vem"/><path class="o0za0bc4z"/></g>`,
		"fallback": "uix:map-dungeon",
	});
}

export default Component;
