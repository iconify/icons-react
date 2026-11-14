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
		"content": `<style>.f-nzghbmo {
  d: path("M7.5 5.5q1 6.75 0 13.5m9-13.5q-1 6.75 0 13.5M12 6v14m0-6h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ltaqp6b9m {
  d: path("M3 4q9 4 18 0M3 10q9 8 18 0M3 16q9 8 18 0");
}
</style><g class="hntgybcog"><path class="ltaqp6b9m"/><path class="f-nzghbmo"/></g>`,
		"fallback": "uix:spacetime-curve",
	});
}

export default Component;
