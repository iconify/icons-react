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
		"content": `<style>.bz3jci-9u {
  d: path("M8 6h11a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8l-5-6Z");
}

.hutb108ig {
  d: path("M7 12a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bz3jci-9u"/><path class="hutb108ig"/></g>`,
		"fallback": "uix-sharp:issue-label",
	});
}

export default Component;
