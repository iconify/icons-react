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
		"content": `<style>.bl1paikgm {
  d: path("M4.75 11.75a7.25 7.25 0 0 1 14.5 0V13H4.75zm3.25 4c-.75 1.5.75 2.5 0 4m4-4c-.75 1.75.75 3 0 5.25m4-5.25c-.75 1.5.75 2.5 0 4");
}

.siqobfb8l {
  d: path("m8.25 9.5l.719-1.971L11 7");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="bl1paikgm"/><path class="siqobfb8l"/></g>`,
		"fallback": "iconoven:jellyfish-sharp",
	});
}

export default Component;
