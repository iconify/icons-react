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
		"content": `<style>.cnc_6qb7x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 9H10v4.5H7L6 19H3l.75-5.5H2.5Zm19-5.5v17M14 8.25l4.75-2m-4.25 5h4.25m-4.75 3l4.75 2");
}
</style><path class="cnc_6qb7x"/>`,
		"fallback": "uix:pressure-washing",
	});
}

export default Component;
