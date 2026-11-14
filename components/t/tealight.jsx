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
		"content": `<style>.hrp5e5bqh {
  d: path("M5 13a7 2.25 0 1 0 14 0a7 2.25 0 1 0-14 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z7nqkm8gt {
  d: path("M5 13v3.75c0 1.75 3 3 7 3s7-1.25 7-3V13m-7-5c-1.4-.85-1.5-2.5 0-4.5c1.5 2 1.4 3.65 0 4.5Z");
}
</style><g class="ulnmmdpxh"><path class="hrp5e5bqh"/><path class="z7nqkm8gt"/></g>`,
		"fallback": "uix-sharp:tealight",
	});
}

export default Component;
