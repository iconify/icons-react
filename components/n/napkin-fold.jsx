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
		"content": `<style>.mbeoqrbjv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 21L2.5 9.5l4-5.5L12 2.5L17.5 4l4 5.5L14 21M4 21h16M6.5 4l2 8M12 2.5V12m5.5-8l-2 8");
}
</style><path class="mbeoqrbjv"/>`,
		"fallback": "uix-sharp:napkin-fold",
	});
}

export default Component;
