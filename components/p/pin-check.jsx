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
		"content": `<style>.a9-iwj4yd {
  d: path("M7 8.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm7.75 9.5l2 2L21 15.75");
}

.szgbmkb4d {
  d: path("M9 19S3.5 14 3.5 8.5a5.5 5.5 0 0 1 11 0C14.5 14 9 19 9 19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="szgbmkb4d"/><path class="a9-iwj4yd"/></g>`,
		"fallback": "uix-sharp:pin-check",
	});
}

export default Component;
