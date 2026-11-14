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
		"content": `<style>.gcpo0tb2q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M20 2.5v19m-7-19V8m0 5v8.5m-10 0C3 15 7 11 13 8M8 21.5c0-4.5 2-7 5-8.5");
}
</style><path class="gcpo0tb2q"/>`,
		"fallback": "uix-sharp:slip-road",
	});
}

export default Component;
