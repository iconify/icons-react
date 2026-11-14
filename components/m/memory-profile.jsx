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
		"content": `<style>.jov7ywodi {
  d: path("M5.5 13.25L9 9.5l3.5 1.5l6-4.25");
}

.rdrodebxk {
  d: path("M2.5 4h19v12h-19ZM6 16v3.5m4-3.5v3.5m4-3.5v3.5m4-3.5v3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rdrodebxk"/><path class="jov7ywodi"/></g>`,
		"fallback": "uix-sharp:memory-profile",
	});
}

export default Component;
