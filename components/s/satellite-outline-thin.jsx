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
		"content": `<style>.b4-wc0yut {
  d: path("M3.48 10.26a8 8 0 0 1 15.04 5.5");
}

.c60esnb_c {
  d: path("M6 20h10");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k2kn5zbik {
  d: path("m11 13 6 -6");
}

.omg7adb5g {
  d: path("M11 13v7");
}
</style><g class="hntgybcog"><path class="b4-wc0yut"/><path class="k2kn5zbik"/><path class="omg7adb5g"/><path class="c60esnb_c"/></g>`,
		"fallback": "iconmind:satellite-outline-thin",
	});
}

export default Component;
