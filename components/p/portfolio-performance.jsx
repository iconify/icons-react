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

.j_q_y1bdx {
  d: path("M3.5 3.5v17h17");
}

.psb25fbbu {
  d: path("m7 15l3-4.5l3 3l3-5l3 2.5");
}
</style><g class="hntgybcog"><path class="j_q_y1bdx"/><path class="psb25fbbu"/></g>`,
		"fallback": "uix:portfolio-performance",
	});
}

export default Component;
