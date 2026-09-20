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

.m8h6hlbgk {
  d: path("m5 13 3 3");
}

.uux3anbrn {
  d: path("m9 9 3 3");
}

.xvabp0bhv {
  d: path("M2 16 16 2l6 6L8 22Z");
}

.yyqghmoaf {
  d: path("m13 5 3 3");
}
</style><g class="hntgybcog"><path class="xvabp0bhv"/><path class="m8h6hlbgk"/><path class="uux3anbrn"/><path class="yyqghmoaf"/></g>`,
		"fallback": "iconmind:school-ruler-outline-thin",
	});
}

export default Component;
