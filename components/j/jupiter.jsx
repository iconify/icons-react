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

.rfxf19bqw {
  d: path("M5.25 8.25h13.5M4.75 12h5m-4.5 3.75h13.5M11.5 12a2.5 1.5 0 1 0 5 0a2.5 1.5 0 1 0-5 0");
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="rfxf19bqw"/></g>`,
		"fallback": "iconoven:jupiter",
	});
}

export default Component;
