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
		"content": `<style>.f6xyxvbxw {
  d: path("M2.5 11C8 11 9 16.5 12 16.5s4-5.5 9.5-5.5");
}

.h-5oepxfq {
  d: path("M2.5 15.5C8 15.5 9 21 12 21s4-5.5 9.5-5.5M9 7.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="f6xyxvbxw"/><path class="h-5oepxfq"/></g>`,
		"fallback": "uix-sharp:relativity",
	});
}

export default Component;
