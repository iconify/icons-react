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
		"content": `<style>.cdm8iwbsz {
  width: 11px;
  height: 9px;
  x: 10.25px;
  y: 2.75px;
  rx: 1.75px;
}

.epmedibrd {
  d: path("m13 9l2.25-2.25l1.5 1.5L19 6M8.25 16l4.25-2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l1hjccb9d {
  cx: 5.75px;
  cy: 11.25px;
  r: 2px;
}

.o8r05ib6y {
  d: path("M3.5 21.25H8a.75.75 0 0 0 .75-.75v-2.25a3 3 0 0 0-6 0v2.25a.75.75 0 0 0 .75.75");
}
</style><g class="hntgybcog"><circle class="l1hjccb9d"/><path class="o8r05ib6y"/><rect class="cdm8iwbsz"/><path class="epmedibrd"/></g>`,
		"fallback": "iconoven:pitch",
	});
}

export default Component;
