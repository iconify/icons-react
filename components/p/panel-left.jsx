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
		"content": `<style>.onms97b1e {
  d: path("M17 16.5L14.5 19l2.5 2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uw7ldw55n {
  d: path("M11.6 18H2.5V2.5H21v13.7M9 2.5V18m12.5 1h-7");
}
</style><g class="ulnmmdpxh"><path class="uw7ldw55n"/><path class="onms97b1e"/></g>`,
		"fallback": "uix-sharp:panel-left",
	});
}

export default Component;
