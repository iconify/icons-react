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
		"content": `<style>.fftyk4b6q {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0ZM7 10.25l3.25-.75m3.5 0l3.25.75");
}

.rrswc_bmv {
  d: path("M10 15.5a2 2.5 0 1 0 4 0a2 2.5 0 1 0-4 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="fftyk4b6q"/><path class="rrswc_bmv"/></g>`,
		"fallback": "uix-sharp:mood-tired",
	});
}

export default Component;
