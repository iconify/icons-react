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
		"content": `<style>.s9unfnbyy {
  d: path("m4 15l8-4.25L20 15");
}

.tjlkhbbov {
  fill: currentColor;
  d: path("M3 15h18l-3 6.5H6Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z5ic6eb9s {
  d: path("M13.75 2v7a1.75 1.75 0 0 1-3.5 0V8");
}
</style><g class="ulnmmdpxh"><path class="tjlkhbbov"/><path class="z5ic6eb9s"/><path class="s9unfnbyy"/></g>`,
		"fallback": "uix-sharp:mine-skip",
	});
}

export default Component;
