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

.m3tfe9bwc {
  fill: currentColor;
  d: path("M9 2.5H3l7 7V12h4V9.5l7 -7h-6");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.mjze8rg7o {
  d: path("M9 2.5H3l7 7V12h4V9.5l7 -7h-6");
}

.x3sflacnk {
  d: path("M9 18h6");
}

.yp080mb3n {
  d: path("M11.5 15.5 9 18l2.5 2.5");
}
</style><g class="hntgybcog"><path class="m3tfe9bwc"/><path class="mjze8rg7o"/><path class="x3sflacnk"/><path class="yp080mb3n"/></g>`,
		"fallback": "iconmind:retrieval-fallback-duotone-thin",
	});
}

export default Component;
