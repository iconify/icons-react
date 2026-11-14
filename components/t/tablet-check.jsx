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
		"content": `<style>.n0bp65b1i {
  d: path("M4 2.5h16v19H4Zm6.5 16h3");
}

.rp8wm1bdu {
  d: path("m9 10.5l2.25 2.25l4.25-4.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="n0bp65b1i"/><path class="rp8wm1bdu"/></g>`,
		"fallback": "uix-sharp:tablet-check",
	});
}

export default Component;
