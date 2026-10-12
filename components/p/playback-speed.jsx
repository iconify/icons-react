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
		"content": `<style>.y5y5j4b6u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m9.79 5.27l9.92 5.96q1.29.77 0 1.54l-9.92 5.96Q8.5 19.5 8.5 18V6q0-1.5 1.29-.73M2.75 8.25h3m-3 3.75h2m-2 3.75h3");
}
</style><path class="y5y5j4b6u"/>`,
		"fallback": "iconoven:playback-speed",
	});
}

export default Component;
