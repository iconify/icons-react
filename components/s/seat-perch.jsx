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
		"content": `<style>.qgoyl84rv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 3.5h8A1.5 1.5 0 0 1 17.5 5A1.5 1.5 0 0 1 16 6.5H8A1.5 1.5 0 0 1 6.5 5A1.5 1.5 0 0 1 8 3.5m.5 3l-2 14m9-14l2 14M7.5 15h9");
}
</style><path class="qgoyl84rv"/>`,
		"fallback": "uix:seat-perch",
	});
}

export default Component;
