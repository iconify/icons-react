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
		"content": `<style>.dcmowo5ep {
  d: path("m17.75 16.5l2.75-1l1 2.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vu3nx4c5y {
  d: path("M7 13.5h10a3.5 3.5 0 1 0-.5-7a4.5 4.5 0 1 0-9 0a3.5 3.5 0 1 0-.5 7Zm-3.5 2a9.5 9.5 0 0 0 17 0");
}
</style><g class="ulnmmdpxh"><path class="vu3nx4c5y"/><path class="dcmowo5ep"/></g>`,
		"fallback": "uix-sharp:thought-reframe",
	});
}

export default Component;
