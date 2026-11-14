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
		"content": `<style>.er8er4btu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 9h5a3.5 3.5 0 0 1 3.5 3.5V18a3.5 3.5 0 0 1-3.5 3.5h-5A3.5 3.5 0 0 1 6 18v-5.5A3.5 3.5 0 0 1 9.5 9m.5 3v6.5m4-6.5v6.5M10 6.25C8.75 5 11.25 3.75 10 2.5m4 3.75C12.75 5 15.25 3.75 14 2.5");
}
</style><path class="er8er4btu"/>`,
		"fallback": "uix:space-heater",
	});
}

export default Component;
