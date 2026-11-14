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
		"content": `<style>.qyrdhob1o {
  d: path("m9.75 10.25l5.5 3l-5.5 3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zd9fbdclh {
  d: path("M2.5 7a2 2 0 0 1 2-2H9l2 2.5h8.5a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2Z");
}
</style><g class="ulnmmdpxh"><path class="zd9fbdclh"/><path class="qyrdhob1o"/></g>`,
		"fallback": "uix-sharp:media-folder",
	});
}

export default Component;
