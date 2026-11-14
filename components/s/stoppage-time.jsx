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

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m5k4m2bgu {
  d: path("M6 2.5h7A3.5 3.5 0 0 1 16.5 6v3.5A3.5 3.5 0 0 1 13 13H6a3.5 3.5 0 0 1-3.5-3.5V6A3.5 3.5 0 0 1 6 2.5M9.5 13v8.5m0-16V10M7.25 7.75h4.5m3 10.25a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0");
}
</style><g class="hntgybcog"><path class="m5k4m2bgu"/><path class="a6k62accz"/></g>`,
		"fallback": "uix:stoppage-time",
	});
}

export default Component;
