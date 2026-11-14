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
		"content": `<style>.a95ub6bhf {
  d: path("M6 4.5h12A3.5 3.5 0 0 1 21.5 8v8a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 16V8A3.5 3.5 0 0 1 6 4.5");
}

.epwkiio7r {
  d: path("M7.75 8h8.5A1.75 1.75 0 0 1 18 9.75a1.75 1.75 0 0 1-1.75 1.75h-8.5A1.75 1.75 0 0 1 6 9.75A1.75 1.75 0 0 1 7.75 8M8 15h.01M12 15h.01M16 15h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="a95ub6bhf"/><path class="epwkiio7r"/></g>`,
		"fallback": "uix:sparring-timer",
	});
}

export default Component;
