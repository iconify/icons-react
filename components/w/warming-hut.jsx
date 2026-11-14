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
		"content": `<style>.bj42_1b9h {
  d: path("m4 13l8-6l8 6v8.5H4Z");
}

.ghzqmzbkh {
  d: path("M16 10V6.5h3v5.75m-1.5-8.5c1-1.25 2.5.75 4-.75m-12 11.5h5V19h-5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bj42_1b9h"/><path class="ghzqmzbkh"/></g>`,
		"fallback": "uix-sharp:warming-hut",
	});
}

export default Component;
