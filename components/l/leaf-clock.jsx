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

.evcvir-th {
  d: path("M11.982 17.6c-1.939.757-4.193 1.15-6.732 1.15c0-9.5 5.5-15 15-15c0 3.236-.638 6.008-1.855 8.257M3.75 20.25l1.5-1.5m0 0l8.25-8.25m1.25 7.5a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="evcvir-th"/><path class="a6k62accz"/></g>`,
		"fallback": "uix:leaf-clock",
	});
}

export default Component;
