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
		"content": `<style>.bibby3o2c {
  d: path("M10 18h5a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 15 21h-5a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 10 18");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n4xcbtbse {
  d: path("M17 4.5A7.5 7.5 0 1 0 18.5 15A6 6 0 0 1 17 4.5");
}
</style><g class="hntgybcog"><path class="n4xcbtbse"/><path class="bibby3o2c"/></g>`,
		"fallback": "uix:nursery-lamp",
	});
}

export default Component;
