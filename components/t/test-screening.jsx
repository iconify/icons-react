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
		"content": `<style>.gsj3u-0di {
  d: path("M16.5 15.25H20v2h-3.5Z");
}

.h5m5agg3p {
  d: path("M2.5 2.5h19M13.7 13H4V2.5h16v9.9m-8 .6v7.5m0-3.5l-3.5 3.5m8-4.25H16a1 1 0 0 0-1 1V21a1 1 0 0 0 1 1h4.5a1 1 0 0 0 1-1v-3.75a1 1 0 0 0-1-1H20");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="h5m5agg3p"/><path class="gsj3u-0di"/></g>`,
		"fallback": "uix-sharp:test-screening",
	});
}

export default Component;
