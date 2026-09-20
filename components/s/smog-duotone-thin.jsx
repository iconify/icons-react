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
		"content": `<style>.ceaqndb6y {
  d: path("M14 21v-4h4v4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mwg9vvb9j {
  d: path("M7 21v-5h4v5");
}

.n-7t0yb1r {
  d: path("M3 13h18");
}

.rlbrj1bkl {
  fill: currentColor;
  d: path("M8 7a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.u-pn1xbtk {
  d: path("M8 7a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}
</style><g class="hntgybcog"><path class="rlbrj1bkl"/><path class="u-pn1xbtk"/><path class="n-7t0yb1r"/><path class="mwg9vvb9j"/><path class="ceaqndb6y"/></g>`,
		"fallback": "iconmind:smog-duotone-thin",
	});
}

export default Component;
