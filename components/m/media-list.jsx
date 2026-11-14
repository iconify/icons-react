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
		"content": `<style>.bxk8labio {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4h18v16H3Zm4 4h.01M7 12h.01M7 16h.01M10 8h7m-7 4h7m-7 4h4.5");
}
</style><path class="bxk8labio"/>`,
		"fallback": "uix-sharp:media-list",
	});
}

export default Component;
