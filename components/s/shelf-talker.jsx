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
		"content": `<style>.hxymcxq0t {
  d: path("M10.5 5.5h3V10h-3Zm-3.5 7h10M7 15h6");
}

.r63npcc8c {
  d: path("M2.5 2.5h19V7h-19Zm3 6h13a2 2 0 0 1 2 2V16a2 2 0 0 1-2 2H10l-3 2.75V18H5.5a2 2 0 0 1-2-2v-5.5a2 2 0 0 1 2-2Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="r63npcc8c"/><path class="hxymcxq0t"/></g>`,
		"fallback": "uix-sharp:shelf-talker",
	});
}

export default Component;
