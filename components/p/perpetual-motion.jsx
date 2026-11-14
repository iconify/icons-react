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
		"content": `<style>.ffqogbbrw {
  d: path("M17.25 16.75A7.5 7.5 0 1 1 19 12");
}

.s-v4whb4a {
  d: path("m17 10l2 2l2-2M8 12a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm3.5 0h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ffqogbbrw"/><path class="s-v4whb4a"/></g>`,
		"fallback": "uix-sharp:perpetual-motion",
	});
}

export default Component;
