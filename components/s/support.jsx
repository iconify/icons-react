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
		"content": `<style>.g1093tfeo {
  d: path("M3.5 12.75V21m2.75-7.5H9.5l3 2.25H14A1.125 1.125 0 0 1 14 18h-3.5");
}

.g3xlqt5-p {
  d: path("M6.25 20.5h8.5l6-4.5a1.5 1.5 0 0 0-2-2.25l-3.5 2.5M14 9.75c-1.75-1-3.5-2.5-3.5-4.5a1.75 1.75 0 0 1 3.5 0a1.75 1.75 0 0 1 3.5 0c0 2-1.75 3.5-3.5 4.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="g1093tfeo"/><path class="g3xlqt5-p"/></g>`,
		"fallback": "uix-sharp:support",
	});
}

export default Component;
