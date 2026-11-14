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

.jemuixb4h {
  d: path("M7.5 14h5a3.5 3.5 0 0 1 3.5 3.5v.5a3.5 3.5 0 0 1-3.5 3.5h-5A3.5 3.5 0 0 1 4 18v-.5A3.5 3.5 0 0 1 7.5 14m2.5 0V8.5A3.5 3.5 0 0 1 13.5 5h7");
}

.x9gvi1cps {
  d: path("m17.5 2l3 3l-3 3");
}
</style><g class="hntgybcog"><path class="jemuixb4h"/><path class="x9gvi1cps"/></g>`,
		"fallback": "uix:step-out",
	});
}

export default Component;
