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
		"content": `<style>.czjuw8boe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 8.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0ZM2.5 20v-2c0-2.25 1.75-4 3.75-4S10 15.75 10 18v2m3-16h8.5v16H13Zm2.75 4.5h3m-3 4h3m-3 3.5h1.75");
}
</style><path class="czjuw8boe"/>`,
		"fallback": "uix-sharp:note-taker",
	});
}

export default Component;
