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
		"content": `<style>.rlbthab0x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 10h4L13 5.5v13L7.5 14h-4ZM16 9.5c1.5 1.5 1.5 3.5 0 5M18.5 7c2.5 2.5 2.5 7.5 0 10");
}
</style><path class="rlbthab0x"/>`,
		"fallback": "uix-sharp:noise-level",
	});
}

export default Component;
