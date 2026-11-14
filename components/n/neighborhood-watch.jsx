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
		"content": `<style>.m2goseb2m {
  d: path("M2.5 10L12 2.5l9.5 7.5v11.5h-19Z");
}

.q9ccwclru {
  d: path("M6.5 15C8 12.5 10 11.5 12 11.5s4 1 5.5 3.5C16 17.5 14 18.5 12 18.5s-4-1-5.5-3.5Zm5.5 0h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="m2goseb2m"/><path class="q9ccwclru"/></g>`,
		"fallback": "uix-sharp:neighborhood-watch",
	});
}

export default Component;
