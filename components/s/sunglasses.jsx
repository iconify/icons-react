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
		"content": `<style>.qkcqbg78e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 9h18M6.25 9h1A2.75 2.75 0 0 1 10 11.75a2.75 2.75 0 0 1-2.75 2.75h-1a2.75 2.75 0 0 1-2.75-2.75A2.75 2.75 0 0 1 6.25 9m10.5 0h1a2.75 2.75 0 0 1 2.75 2.75a2.75 2.75 0 0 1-2.75 2.75h-1A2.75 2.75 0 0 1 14 11.75A2.75 2.75 0 0 1 16.75 9M10 11h4");
}
</style><path class="qkcqbg78e"/>`,
		"fallback": "uix:sunglasses",
	});
}

export default Component;
