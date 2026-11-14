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
		"content": `<style>.x5y0jab1r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 7h17.5M3 17h17.5m-3-13l3 3l-3 3m0 4l3 3l-3 3");
}
</style><path class="x5y0jab1r"/>`,
		"fallback": "uix-sharp:test-parallel",
	});
}

export default Component;
