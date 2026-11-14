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
		"content": `<style>.cq8pmsb0m {
  d: path("m7 8.25l4 2.25l4-2.25m-4 2.25V15m-8.5-1.5a8.5 5 0 0 0 17 0v-2");
}

.illa3qtwa {
  d: path("m17.75 13.25l1.75-1.75l1.75 1.75");
}

.m-3n_2j4j {
  d: path("m11 6l4 2.25v4.5L11 15l-4-2.25v-4.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="m-3n_2j4j"/><path class="cq8pmsb0m"/><path class="illa3qtwa"/></g>`,
		"fallback": "uix-sharp:orbit-camera",
	});
}

export default Component;
