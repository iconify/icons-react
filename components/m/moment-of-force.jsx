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
		"content": `<style>.y6bzcxmjc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 12h18m-9 0l4 8H8ZM5 3v5.75M2.75 6.5L5 8.75L7.25 6.5");
}
</style><path class="y6bzcxmjc"/>`,
		"fallback": "uix-sharp:moment-of-force",
	});
}

export default Component;
