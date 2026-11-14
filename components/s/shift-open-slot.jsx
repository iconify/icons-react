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
		"content": `<style>.guzy0jblx {
  d: path("M8 13.5V12h1.5m5 0H16v1.5m0 5V20h-1.5m-5 0H8v-1.5m3.25-6.5h1.5m-1.5 8h1.5M8 15.25v1.5m8-1.5v1.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rw1jw5yvq {
  d: path("M6.5 4.5h11A3.5 3.5 0 0 1 21 8v10a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 18V8a3.5 3.5 0 0 1 3.5-3.5m1.5-2v4m8-4v4m-13 3h18");
}
</style><g class="hntgybcog"><path class="rw1jw5yvq"/><path class="guzy0jblx"/></g>`,
		"fallback": "uix:shift-open-slot",
	});
}

export default Component;
