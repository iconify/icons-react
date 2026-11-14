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

.n5fiuguut {
  d: path("M7 3h3a3.5 3.5 0 0 1 3.5 3.5V18a3.5 3.5 0 0 1-3.5 3.5H7A3.5 3.5 0 0 1 3.5 18V6.5A3.5 3.5 0 0 1 7 3m6.5 3H17a2 2 0 0 1 2 2v8m-1.5 0h3v3h-3Z");
}

.xt7mnpbqt {
  d: path("M7.75 6h1.5a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1.5a1.5 1.5 0 0 1-1.5-1.5v-1A1.5 1.5 0 0 1 7.75 6M19 19v2");
}
</style><g class="hntgybcog"><path class="n5fiuguut"/><path class="xt7mnpbqt"/></g>`,
		"fallback": "uix:refuel-rig",
	});
}

export default Component;
