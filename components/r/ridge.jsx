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
		"content": `<style>.ak5rbbs9u {
  d: path("m2.5 19l6-9l3 4l4-9l6 14Z");
}

.eo--j44-t {
  d: path("m15.5 5l-1.75 5l2 3.5l-1.25 3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ak5rbbs9u"/><path class="eo--j44-t"/></g>`,
		"fallback": "uix-sharp:ridge",
	});
}

export default Component;
