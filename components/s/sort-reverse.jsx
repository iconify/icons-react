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
		"content": `<style>.b9x-f2b8m {
  d: path("M4.25 6.75L7.5 3.5l3.25 3.25m2.5 10.5l3.25 3.25l3.25-3.25");
}

.e7fwg0z-n {
  d: path("M7.5 3.5v6c0 2.5 9 2.5 9 5v6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="e7fwg0z-n"/><path class="b9x-f2b8m"/></g>`,
		"fallback": "uix-sharp:sort-reverse",
	});
}

export default Component;
