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
		"content": `<style>.a2wkxjbsf {
  d: path("M3 5.5q9 2.5 18 0q-2 6.5 0 13q-9-2.5-18 0q2-6.5 0-13");
}

.h12s2sstn {
  d: path("M8 14.25Q10.5 11 15 10");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="a2wkxjbsf"/><path class="h12s2sstn"/></g>`,
		"fallback": "uix:silk-pillowcase",
	});
}

export default Component;
