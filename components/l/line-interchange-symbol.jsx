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
		"content": `<style>.ocloyjbja {
  d: path("M2.5 14h19M7 21.5v-13a5 5 0 0 1 10 0v13");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yruoehbhi {
  fill: currentColor;
  d: path("M5 14a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}
</style><g class="ulnmmdpxh"><path class="ocloyjbja"/><path class="yruoehbhi"/></g>`,
		"fallback": "uix-sharp:line-interchange-symbol",
	});
}

export default Component;
