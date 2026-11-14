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
		"content": `<style>.d918qnbjp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 5h18M3 10h14M3 15h8m5-1.25a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1m4-8a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1");
}
</style><path class="d918qnbjp"/>`,
		"fallback": "uix-sharp:log-format",
	});
}

export default Component;
