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

.l1jjkky7x {
  d: path("M8 18h8");
}

.m3tfe9bwc {
  fill: currentColor;
  d: path("M9 2.5H3l7 7V12h4V9.5l7 -7h-6");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.mes08rb3g {
  d: path("M13.5 15.5 16 18l-2.5 2.5");
}

.mjze8rg7o {
  d: path("M9 2.5H3l7 7V12h4V9.5l7 -7h-6");
}

.ts8wzccza {
  d: path("M10.5 15.5 8 18l2.5 2.5");
}
</style><g class="hntgybcog"><path class="m3tfe9bwc"/><path class="mjze8rg7o"/><path class="l1jjkky7x"/><path class="ts8wzccza"/><path class="mes08rb3g"/></g>`,
		"fallback": "iconmind:reciprocal-fusion-duotone-thin",
	});
}

export default Component;
