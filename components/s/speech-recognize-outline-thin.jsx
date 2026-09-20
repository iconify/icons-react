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
		"content": `<style>.fttf_kblh {
  d: path("M16 14h5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nancp9ugm {
  d: path("M5.05 16.95a7 7 0 0 1 0 -9.9");
}

.rgnpgnbjr {
  d: path("M16 10h5");
}

.xxobs597t {
  d: path("M7.88 14.12a3 3 0 0 1 0 -4.24");
}
</style><g class="hntgybcog"><path class="xxobs597t"/><path class="nancp9ugm"/><path class="rgnpgnbjr"/><path class="fttf_kblh"/></g>`,
		"fallback": "iconmind:speech-recognize-outline-thin",
	});
}

export default Component;
