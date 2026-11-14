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

.ihvl-zl6o {
  d: path("M5.5 10L12 3.5l6.5 6.5");
}

.yrfw9q2nk {
  d: path("M5.5 15.5L12 9l6.5 6.5m-11 5h9");
}
</style><g class="hntgybcog"><path class="ihvl-zl6o"/><path class="yrfw9q2nk"/></g>`,
		"fallback": "uix:priority-high",
	});
}

export default Component;
