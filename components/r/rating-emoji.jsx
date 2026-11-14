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
		"content": `<style>.b920k0_hq {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0ZM9 9.5h.01m5.99 0h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v0cgwbbqb {
  d: path("M8 13.5h8a4 4 0 0 1-8 0Z");
}
</style><g class="ulnmmdpxh"><path class="b920k0_hq"/><path class="v0cgwbbqb"/></g>`,
		"fallback": "uix-sharp:rating-emoji",
	});
}

export default Component;
