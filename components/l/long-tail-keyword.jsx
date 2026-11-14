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

.tmm_wibnb {
  d: path("M8 6za1.5 1.5 0 0 1 1.5 1.5V16A1.5 1.5 0 0 1 8 17.5A1.5 1.5 0 0 1 6.5 16V7.5A1.5 1.5 0 0 1 8 6m4.5 0c1 7 3 11 7.5 11.5");
}
</style><g class="hntgybcog"><path class="j_q_y1bdx"/><path class="tmm_wibnb"/></g>`,
		"fallback": "uix:long-tail-keyword",
	});
}

export default Component;
