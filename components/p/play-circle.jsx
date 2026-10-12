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

.qni9dac1x {
  d: path("m10.84 8.8l4.07 2.65q.84.55 0 1.1l-4.07 2.65q-.84.55-.84-.45v-5.5q0-1 .84-.45");
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="qni9dac1x"/></g>`,
		"fallback": "iconoven:play-circle",
	});
}

export default Component;
