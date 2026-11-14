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
		"content": `<style>.e7v5b6dnm {
  d: path("M5.25 18.75c0-9.5 5.5-15 15-15c0 9.5-5.5 15-15 15m-1.5 1.5l1.5-1.5m0 0L17.5 6.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mgj8bra_x {
  d: path("m6.25 12.5l1.25 4l4 1.25m-2.25-10L11 13l5.25 1.75m-2.5-10l.75 4.75l4.75.75");
}
</style><g class="hntgybcog"><path class="e7v5b6dnm"/><path class="mgj8bra_x"/></g>`,
		"fallback": "uix:leaf-skeleton",
	});
}

export default Component;
