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
		"content": `<style>.lus3lqbrr {
  d: path("M5.75 10a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Zm-.25 6.5h6m6.5-1.75v3.5M18 21h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zccmg1pxg {
  d: path("M2.5 3h12v18h-12Z");
}
</style><g class="ulnmmdpxh"><path class="zccmg1pxg"/><path class="lus3lqbrr"/></g>`,
		"fallback": "uix-sharp:travel-stolen-passport",
	});
}

export default Component;
