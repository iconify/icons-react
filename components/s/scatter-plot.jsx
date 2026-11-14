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
		"content": `<style>.cdz19kbtj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3v17.5H21M8 15h.01M11 11h.01m3.49 2.5h.01m2.99-6h.01M7.5 9.5h.01");
}
</style><path class="cdz19kbtj"/>`,
		"fallback": "uix-sharp:scatter-plot",
	});
}

export default Component;
