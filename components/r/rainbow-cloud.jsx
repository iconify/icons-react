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
		"content": `<style>.n047z-buq {
  d: path("M5.25 13.5A4.75 4.75 0 0 1 11.5 9");
}

.su8cspwgi {
  d: path("M10 19a2.8 2.8 0 0 1 .5-5.5A4 4 0 0 1 18 13a3 3 0 0 1 0 6Zm-8-5.5a8 8 0 0 1 14.25-5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="su8cspwgi"/><path class="n047z-buq"/></g>`,
		"fallback": "uix-sharp:rainbow-cloud",
	});
}

export default Component;
