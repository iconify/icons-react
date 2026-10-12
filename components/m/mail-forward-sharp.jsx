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
		"content": `<style>.t0c9a54sn {
  d: path("M2.75 7.25h14.5v12H2.75z");
}

.v4z1i4ejk {
  d: path("m6 10.75l3.65 2.75L11 14.512l1.35-1.012L16 10.75m2.75-8L21 5l-2.25 2.25M21 5h-6v4.25");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="t0c9a54sn"/><path class="v4z1i4ejk"/></g>`,
		"fallback": "iconoven:mail-forward-sharp",
	});
}

export default Component;
