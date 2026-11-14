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
		"content": `<style>.wl5jpwlqd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 11a9 8 0 0 1 18 0Zm6 0l-.5 8.5A1.5 1.5 0 0 0 10 21h4a1.5 1.5 0 0 0 1.5-1.5L15 11m-3-8v18");
}
</style><path class="wl5jpwlqd"/>`,
		"fallback": "uix-sharp:mushroom-anatomy",
	});
}

export default Component;
