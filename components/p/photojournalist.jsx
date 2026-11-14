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
		"content": `<style>.soeqjkb-q {
  d: path("M10.25 17.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}

.tly-tvb_i {
  d: path("M8.5 6.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm-2 7h11v8h-11Zm-3.5 8v-2c0-2 1.5-3.5 3.5-3.5M21 21.5v-2c0-2-1.5-3.5-3.5-3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tly-tvb_i"/><path class="soeqjkb-q"/></g>`,
		"fallback": "uix-sharp:photojournalist",
	});
}

export default Component;
