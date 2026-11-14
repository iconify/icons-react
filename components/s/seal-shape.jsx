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
		"content": `<style>.a0ho7-kpr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 6.5a2.25 2.25 0 1 1 3 0A2.25 2.25 0 1 1 16 8a2.25 2.25 0 1 1 1.5 2.5a2.25 2.25 0 1 1 0 3A2.25 2.25 0 1 1 16 16a2.25 2.25 0 1 1-2.5 1.5a2.25 2.25 0 1 1-3 0A2.25 2.25 0 1 1 8 16a2.25 2.25 0 1 1-1.5-2.5a2.25 2.25 0 1 1 0-3A2.25 2.25 0 1 1 8 8a2.25 2.25 0 1 1 2.5-1.5");
}
</style><path class="a0ho7-kpr"/>`,
		"fallback": "uix:seal-shape",
	});
}

export default Component;
