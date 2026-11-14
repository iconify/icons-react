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
		"content": `<style>.e-7ablbwk {
  d: path("m10 6.5l4.5 2.75L10 12Zm2 9v3M7.5 21l4.5-2.5l4.5 2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wbqwyt1yv {
  d: path("M2.5 3h19v12.5h-19Z");
}
</style><g class="ulnmmdpxh"><path class="wbqwyt1yv"/><path class="e-7ablbwk"/></g>`,
		"fallback": "uix-sharp:slideshow",
	});
}

export default Component;
