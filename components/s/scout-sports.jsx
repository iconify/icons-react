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
		"content": `<style>.krsb5pbdd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 6h6.5v8.5H4Zm9.5 0H20v8.5h-6.5Zm-3 3h3M7.25 6c0-2.5 2.25-3.5 4.75-3.5s4.75 1 4.75 3.5M3 21.5c0-2.5 3.5-4.25 9-4.25s9 1.75 9 4.25");
}
</style><path class="krsb5pbdd"/>`,
		"fallback": "uix-sharp:scout-sports",
	});
}

export default Component;
