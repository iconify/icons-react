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
		"content": `<style>.c6vt1lbds {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.g5z412jca {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m16.4 12.6l.811 1.622L16.5 16m-7.25 0h3.5");
}

.r2yxwr40h {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7.25 7.5l1.214-1.214L10.25 7");
}

.rxlz5vboi {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15 10.25h.01");
}

.tiofn8-5t {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8.75 10.25h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.wfy6ndqvg {
  cx: 15px;
  cy: 10.25px;
  r: 2.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ux2u0rbkq"><circle class="c6vt1lbds"/><path class="r2yxwr40h"/><path class="tiofn8-5t"/><circle class="wfy6ndqvg"/><path class="rxlz5vboi"/><path class="g5z412jca"/></g>`,
		"fallback": "iconoven:monocle-face-sharp",
	});
}

export default Component;
