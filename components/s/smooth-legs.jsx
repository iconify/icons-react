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
		"content": `<style>.kajfomvdj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 2.5h12v6H4Zm6 6l-2 13m-1.5-16h7m4.5 8q0 4 4 4q-4 0-4 4q0-4-4-4q4 0 4-4Z");
}
</style><path class="kajfomvdj"/>`,
		"fallback": "uix-sharp:smooth-legs",
	});
}

export default Component;
