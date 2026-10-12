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
		"content": `<style>.fb-eiibjo {
  d: path("M8.25 8.25v-2a3.75 3.5 0 0 1 7.5 0v2Zm-2 3h11.5v10H6.25z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z12_q8exw {
  d: path("M6.25 14.25h11.5m-8 3.75L12 16.5l2.25 1.5q-2.25 2.1-4.5 0Z");
}
</style><g class="x2cwu0gfd"><path class="fb-eiibjo"/><path class="z12_q8exw"/></g>`,
		"fallback": "iconoven:lip-balm-sharp",
	});
}

export default Component;
