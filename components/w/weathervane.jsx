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
		"content": `<style>.pc6ampbgy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 6.5h16m-8 0V21m5.5-17L20 6.5L17.5 9M4 4l2 2.5L4 9m4 3.5h8M8 21h8");
}
</style><path class="pc6ampbgy"/>`,
		"fallback": "uix:weathervane",
	});
}

export default Component;
