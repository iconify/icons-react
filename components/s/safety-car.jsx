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
		"content": `<style>.h5r0_mb-q {
  d: path("M4.5 17.75a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m10 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M10.75 3h3a1 1 0 0 1 1 1a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1a1 1 0 0 1 1-1");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qjt-nxbgo {
  d: path("M2.5 15.25v-2.5a1.5 1.5 0 0 1 1.5-1.5l3-.5l2.5-3H15l3 3l2 .5a1.5 1.5 0 0 1 1.5 1.5v2.5Z");
}
</style><g class="hntgybcog"><path class="qjt-nxbgo"/><path class="h5r0_mb-q"/></g>`,
		"fallback": "uix:safety-car",
	});
}

export default Component;
