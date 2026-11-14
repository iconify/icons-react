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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j5n5mkb9c {
  d: path("M6.5 6.5V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v8.5a2 2 0 0 1-2 2h-2m-15 1L7 12l4.5 4.5m2-6.5h.01");
}

.ok3i7z40w {
  d: path("M6 6.5h8a3.5 3.5 0 0 1 3.5 3.5v6a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 16v-6A3.5 3.5 0 0 1 6 6.5");
}
</style><g class="hntgybcog"><path class="ok3i7z40w"/><path class="j5n5mkb9c"/></g>`,
		"fallback": "uix:spatial-photo",
	});
}

export default Component;
