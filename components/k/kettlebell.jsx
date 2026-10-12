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
		"content": `<style>.c_hs3p2zv {
  d: path("M8.91 20.5a6.75 6.75 0 1 1 6.18 0Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rt7x_rbsd {
  d: path("M8 9.25v-2.5A3.75 3.75 0 0 1 11.75 3h.5A3.75 3.75 0 0 1 16 6.75v2.5");
}
</style><g class="hntgybcog"><path class="c_hs3p2zv"/><path class="rt7x_rbsd"/></g>`,
		"fallback": "iconoven:kettlebell",
	});
}

export default Component;
