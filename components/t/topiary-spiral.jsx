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
		"content": `<style>.sju6a5s4w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13.565 5.63l3.169 6.337a1.75 1.75 0 0 1-1.566 2.533H8.832a1.75 1.75 0 0 1-1.566-2.533l3.169-6.337a1.75 1.75 0 0 1 3.13 0M10 6.5l5.5 3m-7.25.5l9 3M12 14.5V17m-1.938 0h3.876a1.61 1.61 0 0 1 1.562 2l-.169.674A1.75 1.75 0 0 1 13.634 21h-3.268a1.75 1.75 0 0 1-1.697-1.326L8.5 19a1.61 1.61 0 0 1 1.562-2");
}
</style><path class="sju6a5s4w"/>`,
		"fallback": "uix:topiary-spiral",
	});
}

export default Component;
