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
		"content": `<style>.hpjl4rq7a {
  d: path("M4.5 10h15v11h-15ZM8 10V7a4 4 0 0 1 8 0v3");
}

.id3jztb2y {
  d: path("m9.5 15.75l1.75 1.75l3.5-3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hpjl4rq7a"/><path class="id3jztb2y"/></g>`,
		"fallback": "uix-sharp:lock-check",
	});
}

export default Component;
