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
		"content": `<style>.sot4gib1c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 10q5.25-.75 5-6q-5.25.75-5 6Zm15 3q.75-4.25-3.5-5.5q-.75 4.25 3.5 5.5Zm-13 6q4.25 1.5 6.5-2.5Q8.75 15 6.5 19Zm-2-9L3 11.5M19.5 13l1 1.75M6.5 19l-1.75.75");
}
</style><path class="sot4gib1c"/>`,
		"fallback": "uix-sharp:leaves-falling",
	});
}

export default Component;
