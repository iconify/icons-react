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
		"content": `<style>.cko0p_4wb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 2.5v19m13-19v19M5.5 14h13m-10-4.5a5 5 0 0 1 7-4a5 5 0 0 1-7 4Z");
}
</style><path class="cko0p_4wb"/>`,
		"fallback": "uix-sharp:rugby-conversion",
	});
}

export default Component;
