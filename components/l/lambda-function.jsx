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
		"content": `<style>.boz75pbnv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 3.5h2q1.75 0 2.5 1.5l7 14q.75 1.5 2.5 1.5m-7.25-11L5 20.5");
}
</style><path class="boz75pbnv"/>`,
		"fallback": "uix:lambda-function",
	});
}

export default Component;
