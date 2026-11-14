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

.xsj1m-bav {
  d: path("M6.5 5.5c.5 10 3.5 13 13.5 13");
}
</style><g class="hntgybcog"><path class="j_q_y1bdx"/><path class="xsj1m-bav"/></g>`,
		"fallback": "uix:long-tail",
	});
}

export default Component;
