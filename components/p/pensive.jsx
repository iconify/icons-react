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
		"content": `<style>.dbgvcxwad {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xg693nrul {
  d: path("M7.5 8.25L10 7m6.5 1.25L14 7m-6.25 4c.6.6 1.9.6 2.5 0m3.5 0c.6.6 1.9.6 2.5 0M10 16.25c1.25-.5 2.75-.5 4 0");
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="xg693nrul"/></g>`,
		"fallback": "iconoven:pensive",
	});
}

export default Component;
