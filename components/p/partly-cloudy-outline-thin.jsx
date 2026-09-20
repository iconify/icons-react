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
		"content": `<style>.fd-_w9lgw {
  d: path("M8 21a4 4 0 0 1 2 -7.5 5 5 0 0 1 9 -1 4.5 4.5 0 0 1 3 8.5Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j330vxbun {
  d: path("M4 7a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.l3q0873tf {
  d: path("M13.5 2.5 11 5");
}

.ucd8o6bjf {
  d: path("M2.5 2.5 5 5");
}
</style><g class="hntgybcog"><path class="j330vxbun"/><path class="ucd8o6bjf"/><path class="l3q0873tf"/><path class="fd-_w9lgw"/></g>`,
		"fallback": "iconmind:partly-cloudy-outline-thin",
	});
}

export default Component;
