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
		"content": `<style>.lgq0unamu {
  d: path("M3 15C5 10 6 4.5 8 5s-.5 9 1.5 9.5C11 15 12 9 14 9.5c1.5.5 2 1.5 4.5 0m-16 9H11m3-.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.nr2kwkbiv {
  d: path("M17 15h2a3 3 0 0 1 0 6h-2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lgq0unamu"/><path class="nr2kwkbiv"/></g>`,
		"fallback": "uix-sharp:signing-bonus",
	});
}

export default Component;
