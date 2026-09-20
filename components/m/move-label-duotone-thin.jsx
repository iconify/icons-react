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

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ue3yoeyrj {
  d: path("m12.5 11 2.5 2.5 -2.5 2.5");
}

.w0sebyb3m {
  d: path("M9 13.5h6");
}

.w3hyiobto {
  d: path("M3 6h10l8 8 -8 8H3Z");
}
</style><g class="hntgybcog"><path class="fbde_z08y"/><path class="w3hyiobto"/><path class="w0sebyb3m"/><path class="ue3yoeyrj"/></g>`,
		"fallback": "iconmind:move-label-duotone-thin",
	});
}

export default Component;
