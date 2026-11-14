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
		"content": `<style>.dwc3k5b0p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 5h17m-17 5h17m-17 5H10m6 2.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm-1.5-3a4.25 4.25 0 0 0 0 6m6-6a4.25 4.25 0 0 1 0 6");
}
</style><path class="dwc3k5b0p"/>`,
		"fallback": "uix-sharp:radio-playlist",
	});
}

export default Component;
