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
		"content": `<style>.rrd3fybwh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 14L20 2.5M3.5 14h10m-9 0v4m4-4v4m4-4v4m-10 3h19m-6-3q1.5-2.5 3 0q1.5-2.5 3 0");
}
</style><path class="rrd3fybwh"/>`,
		"fallback": "uix-sharp:lawn-dethatch",
	});
}

export default Component;
