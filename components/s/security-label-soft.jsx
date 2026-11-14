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
		"content": `<style>.g7phdfnuj {
  d: path("M21.5 16h-4a1.5 1.5 0 0 0-1.5 1.5v4M6 15V6h9v7H9V9h3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.sb0of0uav {
  d: path("M2.5 4.5a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2V16L16 21.5H4.5a2 2 0 0 1-2-2Z");
}
</style><g class="hntgybcog"><path class="sb0of0uav"/><path class="g7phdfnuj"/></g>`,
		"fallback": "uix:security-label-soft",
	});
}

export default Component;
