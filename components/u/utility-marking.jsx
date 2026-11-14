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
		"content": `<style>.k4k6-1bmz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 10A1.5 1.5 0 0 1 7 8.5h1V5h3v3.5h1a1.5 1.5 0 0 1 1.5 1.5v7.5A1.5 1.5 0 0 1 12 19H7a1.5 1.5 0 0 1-1.5-1.5Zm10-4.5h.01m2.99-1.75h.01M2.5 21.5H7m3 0h4.5m3 0h4");
}
</style><path class="k4k6-1bmz"/>`,
		"fallback": "uix-sharp:utility-marking",
	});
}

export default Component;
