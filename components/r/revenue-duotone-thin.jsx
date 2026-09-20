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

.lev20-kjj {
  d: path("m14 17 2.5 -2.5 2 2L22 13");
}

.mkq994bjz {
  fill: currentColor;
  d: path("M2.5 12a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0 -9 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.o610cu0jy {
  d: path("M2.5 12a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0 -9 0");
}

.u_pwg_bmr {
  d: path("M7 10.5v3");
}
</style><g class="hntgybcog"><path class="mkq994bjz"/><path class="o610cu0jy"/><path class="u_pwg_bmr"/><path class="lev20-kjj"/></g>`,
		"fallback": "iconmind:revenue-duotone-thin",
	});
}

export default Component;
