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
		"content": `<style>.d03oe76xl {
  width: 4px;
  height: 3px;
  x: 10px;
  y: 9.5px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 1px;
}

.j9nijwbem {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M19 9.75h.01M5 9.75h.01m15.49 3h.01m-17.01 0h.01");
}

.m6mslobrx {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14 10.25c1.75-2.5 4-4 7.25-4.25M10 10.25c-1.75-2.5-4-4-7.25-4.25");
}

.sxsiyfbng {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 21.25h10m-5 0V12.5");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="sxsiyfbng"/><rect class="d03oe76xl"/><path class="m6mslobrx"/><path class="j9nijwbem"/></g>`,
		"fallback": "iconoven:sprinkler-farm",
	});
}

export default Component;
