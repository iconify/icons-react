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
		"content": `<style>.n1uleqyqr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 4a2 2 0 1 0 4 0a2 2 0 1 0-4 0m2 3.5v5M8 19l4-6.5l4 6.5m-9-8l5-2.25L17 11M4.5 15l6 6m9-6l-6 6");
}
</style><path class="n1uleqyqr"/>`,
		"fallback": "uix:skier-snowplough",
	});
}

export default Component;
