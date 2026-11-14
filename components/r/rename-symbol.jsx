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
		"content": `<style>.eneh5abtm {
  d: path("M13 3v5h5m-7.5 13h-5c-.83 0-1.5-.67-1.5-1.5v-15M14.75 22l.5-2.5L20 14.75l2 2l-4.75 4.75Z");
}

.lyf1cr_6c {
  d: path("M4 4.5C4 3.67 4.67 3 5.5 3H13l5 5v4.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lyf1cr_6c"/><path class="eneh5abtm"/></g>`,
		"fallback": "uix-sharp:rename-symbol",
	});
}

export default Component;
