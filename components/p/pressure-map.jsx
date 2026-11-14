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
		"content": `<style>.a62lwnjiv {
  d: path("M6 10c0-2.5 2.5-3 4.5-2c1.5.75 2.5-.5 4.5-.5c2.25 0 3.5 2 2.75 4.25S18 16.5 14.5 16.5c-3 0-4-1.5-6-1S6 13 6 10");
}

.eupynoq0k {
  d: path("m3.697 4.601l4.289-1.43a1.75 1.75 0 0 1 1.035-.022l5.958 1.702a1.75 1.75 0 0 0 1.035-.022l3.183-1.061a1.75 1.75 0 0 1 2.303 1.66v12.311a1.75 1.75 0 0 1-1.197 1.66l-4.289 1.43a1.75 1.75 0 0 1-1.035.022l-5.958-1.702a1.75 1.75 0 0 0-1.035.022l-3.183 1.061a1.75 1.75 0 0 1-2.303-1.66V6.261a1.75 1.75 0 0 1 1.197-1.66");
}

.ewm8dnbts {
  d: path("M10.5 11.75a2 1.75 0 1 0 4 0a2 1.75 0 1 0-4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="eupynoq0k"/><path class="a62lwnjiv"/><path class="ewm8dnbts"/></g>`,
		"fallback": "uix:pressure-map",
	});
}

export default Component;
