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

.hol0eioxz {
  d: path("M7.5 6c1.5 6.5 5 9.5 12 10.5M7.5 6h.01M19.5 16.5h.01");
}

.j_q_y1bdx {
  d: path("M3.5 3.5v17h17");
}
</style><g class="hntgybcog"><path class="j_q_y1bdx"/><path class="hol0eioxz"/></g>`,
		"fallback": "uix:retention-curve",
	});
}

export default Component;
