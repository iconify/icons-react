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

.id7pmybtf {
  d: path("m9.5 7.5l3-2v13m-3 0h6");
}

.q038wrbzy {
  d: path("M8.5 2.5h7A3.5 3.5 0 0 1 19 6v12a3.5 3.5 0 0 1-3.5 3.5h-7A3.5 3.5 0 0 1 5 18V6a3.5 3.5 0 0 1 3.5-3.5");
}
</style><g class="hntgybcog"><path class="q038wrbzy"/><path class="id7pmybtf"/></g>`,
		"fallback": "uix:round-card",
	});
}

export default Component;
