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

.tzwavhcpu {
  d: path("M3.5 4.5L7 8.25h10l3.5-3.75M7 8.25V16m10-7.75V16M2.5 19.5q2.25-1.5 4.5 0t4.5 0t4.5 0t4.5 0");
}

.ufqune_dy {
  d: path("M3.5 16V4.5h17V16");
}
</style><g class="hntgybcog"><path class="ufqune_dy"/><path class="tzwavhcpu"/></g>`,
		"fallback": "uix:water-polo-goal",
	});
}

export default Component;
