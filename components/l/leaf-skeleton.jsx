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
		"content": `<style>.eq5yqdimz {
  d: path("M5.25 18.75c0-9.5 5.5-15 15-15c0 9.5-5.5 15-15 15Zm-1.5 1.5l1.5-1.5m0 0L17.5 6.5");
}

.mgj8bra_x {
  d: path("m6.25 12.5l1.25 4l4 1.25m-2.25-10L11 13l5.25 1.75m-2.5-10l.75 4.75l4.75.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="eq5yqdimz"/><path class="mgj8bra_x"/></g>`,
		"fallback": "uix-sharp:leaf-skeleton",
	});
}

export default Component;
