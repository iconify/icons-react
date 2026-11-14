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

.j6s7l6bxz {
  d: path("M8 7c-5 3-4.5 14 0 14h8c4.5 0 5-11 0-14Zm2 0L8.5 3h7L14 7");
}

.ny6m15pqj {
  d: path("M7.5 14q2.25-1.5 4.5 0t4.5 0");
}
</style><g class="hntgybcog"><path class="j6s7l6bxz"/><path class="ny6m15pqj"/></g>`,
		"fallback": "uix:swim-bag",
	});
}

export default Component;
