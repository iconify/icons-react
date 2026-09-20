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
		"content": `<style>.eh3r5zbug {
  fill: currentColor;
  d: path("M9 13.5h6v3H9Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.fbde_z08y {
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

.jluoio_sz {
  d: path("M9 13.5h6v3H9Z");
}

.v00cs4edx {
  d: path("M10.5 13.5a1.5 1.5 0 0 1 3 0");
}

.w3hyiobto {
  d: path("M3 6h10l8 8 -8 8H3Z");
}
</style><g class="hntgybcog"><path class="fbde_z08y"/><path class="eh3r5zbug"/><path class="w3hyiobto"/><path class="jluoio_sz"/><path class="v00cs4edx"/></g>`,
		"fallback": "iconmind:locked-label-duotone-thin",
	});
}

export default Component;
