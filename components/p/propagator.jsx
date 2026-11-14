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
		"content": `<style>.ekvh6kq5l {
  d: path("M9 15v-3.5M7.5 10L9 11.5l1.5-1.5m4.5 5v-3.5M13.5 10l1.5 1.5l1.5-1.5");
}

.gpx7f9big {
  d: path("M3 15h18v3.5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm1 0C4 8 8 4.5 12 4.5S20 8 20 15");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="gpx7f9big"/><path class="ekvh6kq5l"/></g>`,
		"fallback": "uix:propagator",
	});
}

export default Component;
