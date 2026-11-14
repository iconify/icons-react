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
		"content": `<style>.caz7z9bbr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 7a3 4.5 0 1 0 6 0a3 4.5 0 1 0-6 0Zm3 4.5V17m0 0c-3.5 0-6.5-2-6.5-5C9 12 12 14 12 17Zm0 0c3.5 0 6.5-2 6.5-5c-3.5 0-6.5 2-6.5 5Zm-9 3.5q2.25-.75 4.5 0t4.5 0t4.5 0t4.5 0");
}
</style><path class="caz7z9bbr"/>`,
		"fallback": "uix-sharp:water-hyacinth",
	});
}

export default Component;
