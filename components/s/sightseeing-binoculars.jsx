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

.i-ew4jjjn {
  d: path("M7 10.5L8.5 5H10m7 5.5L15.5 5H14m-4 0h4");
}

.z789a247t {
  d: path("M3 14.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0m10 0a4 4 0 1 0 8 0a4 4 0 1 0-8 0");
}
</style><g class="hntgybcog"><path class="z789a247t"/><path class="i-ew4jjjn"/></g>`,
		"fallback": "uix:sightseeing-binoculars",
	});
}

export default Component;
