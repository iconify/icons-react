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
		"content": `<style>.tt7qp0b0f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5 14l7-6l7 6v7.5H5ZM3.802 3.789l1.644.598l-.598 1.645l-1.645-.599ZM9 2.75h.01M12.5 4.5c.75-1.5 2 1 3-.5q.75-1.125 1.5-.75m1.503 3.137l1.586-.739l.74 1.586l-1.586.739ZM21 11h.01M3 10.25h.01m3.49-2c.5-1 1.5 0 2.25-1.25");
}
</style><path class="tt7qp0b0f"/>`,
		"fallback": "uix-sharp:mortgage-paid-off",
	});
}

export default Component;
