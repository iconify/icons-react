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
		"content": `<style>.fbde_z08y {
  fill: currentColor;
  d: path("M3 6h10l8 8 -8 8H3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hgb-t7boy {
  d: path("M6 10a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r8hnofl7s {
  fill: currentColor;
  d: path("M6 10a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.udsnn3bwn {
  d: path("M9.5 17.5 12 15l2.5 2.5");
}

.w3hyiobto {
  d: path("M3 6h10l8 8 -8 8H3Z");
}

.ykj59ccld {
  d: path("M9.5 13.5 12 11l2.5 2.5");
}
</style><g class="hntgybcog"><path class="fbde_z08y"/><path class="r8hnofl7s"/><path class="w3hyiobto"/><path class="hgb-t7boy"/><path class="ykj59ccld"/><path class="udsnn3bwn"/></g>`,
		"fallback": "iconmind:severity-label-duotone-thin",
	});
}

export default Component;
