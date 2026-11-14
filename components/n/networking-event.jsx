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
		"content": `<style>.bz3d7j_iz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 8.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m11 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m-12.5 10c0-3 2-4.5 4-4.5s4 1.5 4 4.5m3 0c0-3 2-4.5 4-4.5s4 1.5 4 4.5M9 8.5h6");
}
</style><path class="bz3d7j_iz"/>`,
		"fallback": "uix:networking-event",
	});
}

export default Component;
