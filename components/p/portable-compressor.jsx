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
		"content": `<style>.qahig3lrf {
  d: path("M5.75 14a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0ZM9 14l1.5-1.5");
}

.r1ynpub7t {
  d: path("M2.5 7.5h13v13h-13Zm3.5 0v-3h6v3m3.5 8.5c6 0 6-6.5 3-6.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="r1ynpub7t"/><path class="qahig3lrf"/></g>`,
		"fallback": "uix-sharp:portable-compressor",
	});
}

export default Component;
