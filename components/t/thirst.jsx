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
		"content": `<style>.dq80w0b5x {
  fill: currentColor;
  d: path("M6.5 15.5c2.5-.5 8.5-.5 11 0c-2 3-9 3-11 0Zm5.5-13c1.5 1.75 2.25 2.75 2.25 3.75c0 1.25-1 2.25-2.25 2.25s-2.25-1-2.25-2.25c0-1 .75-2 2.25-3.75Z");
}

.fzem1cm-t {
  d: path("M2.5 15.5c2.5-3.5 5.5-5 7.75-4.25L12 12l1.75-.75C16 10.5 19 12 21.5 15.5C19 19.25 15.5 21 12 21s-7-1.75-9.5-5.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="fzem1cm-t"/><path class="dq80w0b5x"/></g>`,
		"fallback": "uix-sharp:thirst",
	});
}

export default Component;
