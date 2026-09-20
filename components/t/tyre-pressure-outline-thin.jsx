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
		"content": `<style>.aymrypeyx {
  d: path("M7 15a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.evwcdlhbn {
  d: path("M14 7a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r2m9mtdol {
  d: path("M2.5 15a6.5 6.5 0 1 0 13 0 6.5 6.5 0 1 0 -13 0");
}

.x0y-s6bwx {
  d: path("m18 7 2.5 -2.5");
}
</style><g class="hntgybcog"><path class="r2m9mtdol"/><path class="aymrypeyx"/><path class="evwcdlhbn"/><path class="x0y-s6bwx"/></g>`,
		"fallback": "iconmind:tyre-pressure-outline-thin",
	});
}

export default Component;
