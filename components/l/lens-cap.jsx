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

.m5xhbpbfp {
  d: path("M6.5 9.25v5.5m11-5.5v5.5");
}

.va5xsmb9x {
  width: 5px;
  height: 2.5px;
  x: 9.5px;
  y: 10.75px;
  rx: 1.25px;
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="m5xhbpbfp"/><rect class="va5xsmb9x"/></g>`,
		"fallback": "iconoven:lens-cap",
	});
}

export default Component;
