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
		"content": `<style>.a03f0e65p {
  d: path("M12 11c1.75 2 2.25 3 2.25 4a2.25 2.25 0 0 1-4.5 0c0-1 .5-2 2.25-4m0 0l4.25-4.25M2.5 12H5m7-9.5V5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oy9aotbsd {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="a03f0e65p"/></g>`,
		"fallback": "uix:oil-pressure-gauge",
	});
}

export default Component;
