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
		"content": `<style>.gx7jiib5h {
  d: path("M3.5 15.5a8 8 0 0 1 16 0");
}

.tl51n0-xo {
  d: path("m17 13l2.5 2.5L22 13m-10.5 2.5h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gx7jiib5h"/><path class="tl51n0-xo"/></g>`,
		"fallback": "uix-sharp:rotate-180",
	});
}

export default Component;
