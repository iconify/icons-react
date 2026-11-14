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
		"content": `<style>.d894yzp-x {
  d: path("M2.5 20.5v-16H6l2.5 6c3.5 1 7.5 4.5 13 5.5v4.5Z");
}

.h52ad9wiz {
  d: path("m11.5 6l5.5 5.5m-3.5 0H17V8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="d894yzp-x"/><path class="h52ad9wiz"/></g>`,
		"fallback": "uix-sharp:landslide",
	});
}

export default Component;
