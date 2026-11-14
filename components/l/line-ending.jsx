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

.pigujfort {
  d: path("M10.5 13.5L7 17l3.5 3.5");
}

.twz1a5qvw {
  d: path("M3 5h18M3 10h11m5-.5V15q0 2-2 2H7");
}
</style><g class="hntgybcog"><path class="twz1a5qvw"/><path class="pigujfort"/></g>`,
		"fallback": "uix:line-ending",
	});
}

export default Component;
