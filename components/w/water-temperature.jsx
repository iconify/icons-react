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
		"content": `<style>.tq0bwccdv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 5a2 2 0 0 1 4 0v8.75a3.75 3.75 0 1 1-4 0Zm2 3.5v8M13.5 9q1.75-2 3.75 0T21 9m-7.5 5.5q1.75-2 3.75 0t3.75 0");
}
</style><path class="tq0bwccdv"/>`,
		"fallback": "uix-sharp:water-temperature",
	});
}

export default Component;
