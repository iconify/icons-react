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
		"content": `<style>.yda7dvs4m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 4.5h12A3.5 3.5 0 0 1 21.5 8v2a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 10V8A3.5 3.5 0 0 1 6 4.5m.5 2.75v3.5m3.5-3.5v3.5m3.5-3.5v3.5m3.5-3.5v3.5m-.5 10.75c-1.5-1.75 1.5-3.25 0-5m3.5 5c-1.5-1.75 1.5-3.25 0-5");
}
</style><path class="yda7dvs4m"/>`,
		"fallback": "uix:skirting-heater",
	});
}

export default Component;
