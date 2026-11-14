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
		"content": `<style>.c8x_95msw {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0ZM12 7h.01");
}

.ldsb6d2wm {
  d: path("m7.5 9.75l4.5 1l4.5-1m-4.5 1V14m-2.75 4L12 14l2.75 4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="c8x_95msw"/><path class="ldsb6d2wm"/></g>`,
		"fallback": "uix-sharp:universal-access",
	});
}

export default Component;
