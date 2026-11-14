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
		"content": `<style>.g6i3nwbuz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 5h5v7h-5Zm2.5 7v9.5M6.75 6q-1.5 2.5 0 5M4 4q-2.5 4.5 0 9m13.25-7q1.5 2.5 0 5M20 4q2.5 4.5 0 9");
}
</style><path class="g6i3nwbuz"/>`,
		"fallback": "uix-sharp:small-cell",
	});
}

export default Component;
