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
		"content": `<style>.etf4qiqvf {
  fill: currentColor;
  d: path("M10 8h4v4h-4Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.gxhqs-8bt {
  d: path("M10 8h4v4h-4Z");
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
</style><g class="hntgybcog"><path class="p67gkiiyp"/><path class="etf4qiqvf"/><path class="qad3kqbgr"/><path class="gxhqs-8bt"/></g>`,
		"fallback": "iconmind:pickup-point-duotone-thin",
	});
}

export default Component;
