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
		"content": `<style>.ds4siibrt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 19.5h19M3 19.5Q4.5 9 11 3.5q-.5 8.5 1 16m0 0q.5-8 5-11.5q-.25 6 .75 11.5m0 0Q18 15 21 12.5q-.25 4 .25 7");
}
</style><path class="ds4siibrt"/>`,
		"fallback": "uix-sharp:opera-house",
	});
}

export default Component;
