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
		"content": `<style>.bw3qhzbwe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 13V5.25a2.75 2.75 0 0 1 5.5 0V13a4.25 4.25 0 1 1-5.5 0M7.5 9.5v6.75M13.75 12a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m5 8.5V12h2.5m-2.5 4H21");
}
</style><path class="bw3qhzbwe"/>`,
		"fallback": "uix:temperature-fahrenheit",
	});
}

export default Component;
