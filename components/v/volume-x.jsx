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
		"content": `<style>.y2vx9rbyc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 9h1.078a1.75 1.75 0 0 0 1.171-.449L9 6.75a1.498 1.498 0 0 1 2.5 1.113v8.274A1.498 1.498 0 0 1 9 17.25l-2.001-1.801A1.75 1.75 0 0 0 5.828 15H4.75A1.75 1.75 0 0 1 3 13.25v-2.5A1.75 1.75 0 0 1 4.75 9M15 9l6 6m0-6l-6 6");
}
</style><path class="y2vx9rbyc"/>`,
		"fallback": "uix:volume-x",
	});
}

export default Component;
