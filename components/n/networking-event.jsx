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
		"content": `<style>.cz4vwfb6m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 8.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm11 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm-12.5 10c0-3 2-4.5 4-4.5s4 1.5 4 4.5m3 0c0-3 2-4.5 4-4.5s4 1.5 4 4.5M9 8.5h6");
}
</style><path class="cz4vwfb6m"/>`,
		"fallback": "uix-sharp:networking-event",
	});
}

export default Component;
