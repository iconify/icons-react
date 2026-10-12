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

.mial06b_d {
  d: path("M9 7.75v8.5m6-8.5v8.5M9 12h6");
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="mial06b_d"/></g>`,
		"fallback": "iconoven:pressure-high",
	});
}

export default Component;
