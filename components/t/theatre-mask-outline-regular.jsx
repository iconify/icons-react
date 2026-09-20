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
		"content": `<style>.a97qfmbix {
  d: path("M14 9a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.c4o3x9bhp {
  d: path("M8 9a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.h4ns5qbtt {
  d: path("M5 5h14v8a7 7 0 0 1 -14 0Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.se9hxcxbl {
  d: path("M16 13a4 4 0 0 1 -8 0");
}
</style><g class="nrj6p8qat"><path class="h4ns5qbtt"/><path class="c4o3x9bhp"/><path class="a97qfmbix"/><path class="se9hxcxbl"/></g>`,
		"fallback": "iconmind:theatre-mask-outline-regular",
	});
}

export default Component;
