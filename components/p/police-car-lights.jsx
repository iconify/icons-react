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
		"content": `<style>.buizasm4g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.5 12l1.25-4c.25-.9 1-1.5 2-1.5h6.5c1 0 1.75.6 2 1.5l1.25 4M3 12h18v6.5H3Zm3 6.5V21m12-2.5V21M6.75 15.25h.01m10.49 0h.01M10 2h4v1.75h-4ZM7.25 3.5l-2.5-1.25m12 1.25l2.5-1.25");
}
</style><path class="buizasm4g"/>`,
		"fallback": "uix-sharp:police-car-lights",
	});
}

export default Component;
