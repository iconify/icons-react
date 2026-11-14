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

.ju0fa5o_y {
  d: path("M15.5 5H20v4.5");
}

.on9s84xmf {
  d: path("M8 21.5V3M4 7l4-4l4 4M8 17.5c0-3 3-3.5 6-6.5l6-6");
}
</style><g class="hntgybcog"><path class="on9s84xmf"/><path class="ju0fa5o_y"/></g>`,
		"fallback": "uix:lane-arrow-straight-slight-right",
	});
}

export default Component;
