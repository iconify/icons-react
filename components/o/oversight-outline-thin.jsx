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
		"content": `<style>.bo51iypxr {
  d: path("M10 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.c3srb1iyw {
  d: path("M19.5 10.74a8 8 0 0 1 -15.04 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ykru-q-7x {
  d: path("M4.5 13.26a8 8 0 0 1 15.04 0");
}
</style><g class="hntgybcog"><path class="c3srb1iyw"/><path class="ykru-q-7x"/><path class="bo51iypxr"/></g>`,
		"fallback": "iconmind:oversight-outline-thin",
	});
}

export default Component;
