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
		"content": `<style>.fsi7fbbnr {
  d: path("M13.5 15h5");
}

.g9_eu8bfj {
  d: path("M5.5 9h5");
}

.gg9qhlhxo {
  d: path("M8 4v16");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pa1ot6bmg {
  d: path("M16 4v16");
}
</style><g class="hntgybcog"><path class="gg9qhlhxo"/><path class="pa1ot6bmg"/><path class="g9_eu8bfj"/><path class="fsi7fbbnr"/></g>`,
		"fallback": "iconmind:parameters-outline-thin",
	});
}

export default Component;
