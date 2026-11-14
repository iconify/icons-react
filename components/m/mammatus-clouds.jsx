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
		"content": `<style>.nsej2pb1y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 14.75a3.25 3.25 0 0 1 3.5-4.5a5.5 5.5 0 0 1 10.5-1a3.5 3.5 0 0 1 4 5.5Zm.25 2.75a2 2 0 0 0 4 0m2.75 0a2 2 0 0 0 4 0m2.75 0a2 2 0 0 0 4 0");
}
</style><path class="nsej2pb1y"/>`,
		"fallback": "uix:mammatus-clouds",
	});
}

export default Component;
