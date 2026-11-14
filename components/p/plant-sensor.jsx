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
		"content": `<style>.bahi4_b0r {
  d: path("M7.5 13V9.5c-.25-2.75-2-4.5-4-4.5c0 2.5 1.5 4.5 4 4.5c.25-3 1.75-5 3.5-5c0 2.75-1.5 5-3.5 5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.re62xxwas {
  d: path("M5.586 13h11.328a1.75 1.75 0 0 1 1.724 2.054l-.883 5a1.75 1.75 0 0 1-1.723 1.446H6.468a1.75 1.75 0 0 1-1.723-1.446l-.883-5A1.75 1.75 0 0 1 5.586 13M15.75 3.5h1a1.75 1.75 0 0 1 1.75 1.75v3A1.75 1.75 0 0 1 16.75 10h-1A1.75 1.75 0 0 1 14 8.25v-3a1.75 1.75 0 0 1 1.75-1.75m.5 6.5v8.5");
}
</style><g class="hntgybcog"><path class="re62xxwas"/><path class="bahi4_b0r"/></g>`,
		"fallback": "uix:plant-sensor",
	});
}

export default Component;
