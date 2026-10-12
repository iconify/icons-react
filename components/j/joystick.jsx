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
		"content": `<style>.bn940l_mc {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 18.4h.01m9.99 0h.01");
}

.dl2x-xbrh {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 15.5h15A1.5 1.5 0 0 1 21 17v2.75a1.5 1.5 0 0 1-1.5 1.5h-15a1.5 1.5 0 0 1-1.5-1.5V17a1.5 1.5 0 0 1 1.5-1.5m7.5 0V9.75");
}

.nw_26ibjx {
  cx: 12px;
  cy: 6.5px;
  r: 3.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="dl2x-xbrh"/><circle class="nw_26ibjx"/><path class="bn940l_mc"/></g>`,
		"fallback": "iconoven:joystick",
	});
}

export default Component;
