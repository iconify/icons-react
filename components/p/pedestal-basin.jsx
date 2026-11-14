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
		"content": `<style>.g52xu8b6b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 7h17v1.5c0 3-3.5 4.5-8.5 4.5s-8.5-1.5-8.5-4.5Zm6.5 6l-1 8h6l-1-8m-2-6V4.5h2.5");
}
</style><path class="g52xu8b6b"/>`,
		"fallback": "uix-sharp:pedestal-basin",
	});
}

export default Component;
