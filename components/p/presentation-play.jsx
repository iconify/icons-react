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

.j-ffs0b5s {
  fill: currentColor;
  d: path("m12.435 8.464l.065.036a1.43 1.43 0 0 1 0 2.5l-.065.036A1.47 1.47 0 0 1 10.25 9.75a1.47 1.47 0 0 1 2.185-1.286");
}

.s38jnmk1l {
  d: path("M2.5 3.5h19M4 3.5V16h16V3.5m-11.5 18L12 16l3.5 5.5");
}
</style><g class="hntgybcog"><path class="s38jnmk1l"/><path class="j-ffs0b5s"/></g>`,
		"fallback": "uix:presentation-play",
	});
}

export default Component;
