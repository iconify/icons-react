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
		"content": `<style>.q008mkbbd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 3h8m-4 0l3.5 9.75m-1.75 2.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0m-11 4a18.75 18.75 0 0 0 18.5 0");
}
</style><path class="q008mkbbd"/>`,
		"fallback": "uix:pendulum-swing",
	});
}

export default Component;
