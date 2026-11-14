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

.ji99c6bmi {
  fill: currentColor;
  d: path("M10.5 19.5a1 1 0 1 0 2 0a1 1 0 1 0-2 0");
}

.kqizg9bqn {
  d: path("M8 21.5v-4c-2.5-1.75-3.5-4.25-3.5-7C4.5 6.25 7.75 3 12 3c4 0 7 2.75 7 6.75l1.5 3.5c.25.5-.1 1-.75 1H19v2.25c0 1.1-.9 2-2 2h-2v3M16.25 9h.01M17 21.5c.75-.75 1.5 0 2.25-.75s1.5 0 2.25-.75");
}

.tlyyivbse {
  d: path("M17.75 18.5c.75-.75 1.5 0 2.25-.75s1.25-.25 1.5-.5");
}
</style><g class="hntgybcog"><path class="kqizg9bqn"/><path class="tlyyivbse"/><path class="ji99c6bmi"/></g>`,
		"fallback": "uix:sore-throat",
	});
}

export default Component;
