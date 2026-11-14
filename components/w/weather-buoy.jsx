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

.maxbprbxu {
  d: path("M6.5 15a5.5 5.5 0 0 1 11 0");
}

.z0lkabbev {
  d: path("M2.5 15q2-1.5 4 0h11q2 1.5 4 0M12 9.5V3M2.5 19.5q2.375-1.5 4.75 0t4.75 0t4.75 0t4.75 0");
}
</style><g class="hntgybcog"><path class="maxbprbxu"/><path class="z0lkabbev"/></g>`,
		"fallback": "uix:weather-buoy",
	});
}

export default Component;
