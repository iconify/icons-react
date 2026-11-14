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
		"content": `<style>.c_03y5_4w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 2.5v19m16-19v19m-6 0V11a3 3 0 0 0-3-3H8m2.5-2.5L8 8l2.5 2.5");
}
</style><path class="c_03y5_4w"/>`,
		"fallback": "uix-sharp:turn-lane-left",
	});
}

export default Component;
