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

.nedvnlz3b {
  d: path("M7.75 11A3.25 3.25 0 0 1 11 7.75m5.5 8.75L21 21");
}

.ry59zbcad {
  cx: 11px;
  cy: 11px;
  r: 7.25px;
}
</style><g class="hntgybcog"><circle class="ry59zbcad"/><path class="nedvnlz3b"/></g>`,
		"fallback": "iconoven:search-check",
	});
}

export default Component;
