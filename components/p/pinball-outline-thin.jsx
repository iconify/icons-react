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
		"content": `<style>.acyg6nb1v {
  d: path("M10 8a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.bwq8odoli {
  d: path("m17 16 -3 3");
}

.diipsobkl {
  d: path("M5 3v18h14V3Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x7iwfqbso {
  d: path("m7 16 3 3");
}
</style><g class="hntgybcog"><path class="diipsobkl"/><path class="acyg6nb1v"/><path class="x7iwfqbso"/><path class="bwq8odoli"/></g>`,
		"fallback": "iconmind:pinball-outline-thin",
	});
}

export default Component;
