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
		"content": `<style>.fb1beqbdq {
  d: path("M3 13.5a9.5 3.5 0 1 0 17.5-.75M18.25 12l2.25.75l.25-2.25");
}

.jdu8mrbkm {
  d: path("M5.5 10L12 3.5l6.5 6.5v10h-13Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jdu8mrbkm"/><path class="fb1beqbdq"/></g>`,
		"fallback": "uix-sharp:virtual-tour-360",
	});
}

export default Component;
