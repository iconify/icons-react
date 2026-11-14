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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ib28slb6t {
  d: path("M3 9a5.25 5.25 0 1 0 10.5 0A5.25 5.25 0 1 0 3 9m5.25 5.25L4 21.5m4.25-7.25l4.25 7.25");
}

.sqtll3b5m {
  d: path("M6.25 9a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10.25-.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}
</style><g class="hntgybcog"><path class="ib28slb6t"/><path class="sqtll3b5m"/></g>`,
		"fallback": "uix:pitching-machine",
	});
}

export default Component;
