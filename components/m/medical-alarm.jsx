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
		"content": `<style>.c890hrb9p {
  d: path("M10 9.5v-2c0-1.25.9-2.25 2-2.25s2 1 2 2.25v2m-4.75 0h5.5m-2.75 3v5m0 0l-2.5 3.75h5L12 17.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vi07v-spp {
  d: path("M5.5 2.5h13v10h-13Z");
}
</style><g class="ulnmmdpxh"><path class="vi07v-spp"/><path class="c890hrb9p"/></g>`,
		"fallback": "uix-sharp:medical-alarm",
	});
}

export default Component;
