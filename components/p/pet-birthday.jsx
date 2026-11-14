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
		"content": `<style>.c-mxv8aso {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 16h18v5.5H3Zm3-4.5h12V16H6Zm6-2.75v2.75m0-9c1 1 1.5 1.5 1.5 2a1.5 1.5 0 0 1-3 0c0-.5.5-1 1.5-2Z");
}
</style><path class="c-mxv8aso"/>`,
		"fallback": "uix-sharp:pet-birthday",
	});
}

export default Component;
