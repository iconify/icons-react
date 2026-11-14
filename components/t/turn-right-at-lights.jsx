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
		"content": `<style>.ht7xlcczt {
  d: path("M18.25 7.25L21 10l-2.75 2.75M3 2.5h6V15H3Zm3 3h.01M6 8.75h.01M6 12h.01");
}

.o0vz28bru {
  d: path("M13 21.5v-8a3.5 3.5 0 0 1 3.5-3.5H21");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="o0vz28bru"/><path class="ht7xlcczt"/></g>`,
		"fallback": "uix-sharp:turn-right-at-lights",
	});
}

export default Component;
