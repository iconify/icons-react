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
		"content": `<style>.fd1nk098x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 9h1.578a1.75 1.75 0 0 0 1.171-.449L10 6.75a1.498 1.498 0 0 1 2.5 1.113v8.274A1.498 1.498 0 0 1 10 17.25l-2.001-1.801A1.75 1.75 0 0 0 6.828 15H5.25a1.75 1.75 0 0 1-1.75-1.75v-2.5A1.75 1.75 0 0 1 5.25 9m9.725.525a3.5 3.5 0 0 1 0 4.95m3.869-5.433a7 7 0 0 1 0 5.916");
}
</style><path class="fd1nk098x"/>`,
		"fallback": "uix:volume-medium",
	});
}

export default Component;
