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
		"content": `<style>.fgk90dbkb {
  fill: currentColor;
  d: path("m12 8 2 2 -2 2 -2 -2Z");
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

.p67gkiiyp {
  fill: currentColor;
  d: path("M4 10a8 8 0 0 1 16 0l-8 8Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.qad3kqbgr {
  d: path("M4 10a8 8 0 0 1 16 0l-8 8Z");
}

.x7bkced7s {
  d: path("m12 8 2 2 -2 2 -2 -2Z");
}
</style><g class="hntgybcog"><path class="p67gkiiyp"/><path class="fgk90dbkb"/><path class="qad3kqbgr"/><path class="x7bkced7s"/></g>`,
		"fallback": "iconmind:point-of-interest-duotone-thin",
	});
}

export default Component;
