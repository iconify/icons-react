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
		"content": `<style>.duporv-yi {
  d: path("M18.75 17c-.25-.5-.5-.5-.75-.5q-.75 0-.75.75c0 .5 1.5.5 1.5 1.5q0 .75-.75.75c-.5 0-.75-.25-.75-.5m.75-3.25v.75m0 3v.75");
}

.n79zolllo {
  d: path("M6.5 7a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm-3 14.5V20c0-3.5 3-6 6.5-6q1.304 0 2.356.252M14 18a4 4 0 1 0 8 0a4 4 0 1 0-8 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="n79zolllo"/><path class="duporv-yi"/></g>`,
		"fallback": "uix-sharp:research-grant-funding",
	});
}

export default Component;
