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

.je07ixu-r {
  d: path("M4 7.5a5 5 0 1 0 10 0a5 5 0 1 0-10 0M6 15l3 2.5l3-2.5m-3 2.5v4m5.75-3.5a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0");
}
</style><g class="hntgybcog"><path class="je07ixu-r"/><path class="a6k62accz"/></g>`,
		"fallback": "uix:tee-time",
	});
}

export default Component;
