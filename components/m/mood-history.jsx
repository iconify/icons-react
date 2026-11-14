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

.j2kgy3tpa {
  d: path("m7 15l4-5.5l4 3.5l4-6.5M7 15h.01M11 9.5h.01M15 13h.01M19 6.5h.01");
}

.p8u760b4u {
  d: path("M3.5 3v17.5H21");
}
</style><g class="hntgybcog"><path class="p8u760b4u"/><path class="j2kgy3tpa"/></g>`,
		"fallback": "uix:mood-history",
	});
}

export default Component;
