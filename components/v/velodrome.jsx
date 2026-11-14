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

.n_axcacrg {
  d: path("M8 6.5h8a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H8A5.5 5.5 0 0 1 2.5 12A5.5 5.5 0 0 1 8 6.5");
}

.tbnsj3b0z {
  d: path("M8.5 10.25h7A1.75 1.75 0 0 1 17.25 12a1.75 1.75 0 0 1-1.75 1.75h-7A1.75 1.75 0 0 1 6.75 12a1.75 1.75 0 0 1 1.75-1.75M12 6.5v3.75");
}
</style><g class="hntgybcog"><path class="n_axcacrg"/><path class="tbnsj3b0z"/></g>`,
		"fallback": "uix:velodrome",
	});
}

export default Component;
