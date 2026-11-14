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
		"content": `<style>.pbmx8bajr {
  fill: currentColor;
  d: path("M6.5 4.5H12v7H4.75Zm5.5 7h7.25l2.25 8H12Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ytycny5mn {
  d: path("M6.5 4.5h11l4 15h-19Z");
}
</style><g class="ulnmmdpxh"><path class="ytycny5mn"/><path class="pbmx8bajr"/></g>`,
		"fallback": "uix-sharp:lawn-checkerboard",
	});
}

export default Component;
