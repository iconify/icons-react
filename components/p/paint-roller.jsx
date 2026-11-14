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
		"content": `<style>.f82ee-m1o {
  d: path("M18 5.25h2.5v5.5H12V14m-1.5 0h3v7.5h-3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vazw2kb5k {
  d: path("M3 2.5h15V8H3Z");
}
</style><g class="ulnmmdpxh"><path class="vazw2kb5k"/><path class="f82ee-m1o"/></g>`,
		"fallback": "uix-sharp:paint-roller",
	});
}

export default Component;
