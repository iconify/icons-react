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
		"content": `<style>.c73i5bbwm {
  d: path("M10.5 13a5 5 0 1 0 10 0a5 5 0 1 0-10 0ZM12 2.5l1.25 2.25L12 6.5l-1.25-1.75Z");
}

.n_5diq0cb {
  d: path("M3.5 13a5 5 0 1 0 10 0a5 5 0 1 0-10 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="n_5diq0cb"/><path class="c73i5bbwm"/></g>`,
		"fallback": "uix-sharp:marriage-leave",
	});
}

export default Component;
