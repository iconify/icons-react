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
		"content": `<style>.m8lbksbtw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 5c-3.25 0-5.5 3.25-5.5 7s2.25 7 5.5 7c2 0 3-1.25 2.5-3c-.4-1.25-1.75-2.25-1.75-4s1.35-2.75 1.75-4C11 6.25 10 5 8 5Zm8 0c3.25 0 5.5 3.25 5.5 7s-2.25 7-5.5 7c-2 0-3-1.25-2.5-3c.4-1.25 1.75-2.25 1.75-4S13.9 9.25 13.5 8C13 6.25 14 5 16 5Z");
}
</style><path class="m8lbksbtw"/>`,
		"fallback": "uix-sharp:kidneys",
	});
}

export default Component;
