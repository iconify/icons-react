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

.r0ir87bkq {
  d: path("M8.25 9.5h10.5A2.25 2.25 0 0 1 21 11.75A2.25 2.25 0 0 1 18.75 14H8.25A2.25 2.25 0 0 1 6 11.75A2.25 2.25 0 0 1 8.25 9.5");
}

.xhi-_vbse {
  d: path("M3 5v14.5h18V14H3");
}
</style><g class="hntgybcog"><path class="xhi-_vbse"/><path class="r0ir87bkq"/></g>`,
		"fallback": "uix:platform-bed",
	});
}

export default Component;
