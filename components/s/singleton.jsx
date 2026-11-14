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
		"content": `<style>.jhhmu8bph {
  fill: currentColor;
  d: path("M10 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.ovv0shrzd {
  d: path("M14.907 4.013a8.5 8.5 0 0 1 5.08 5.08m0 5.814a8.5 8.5 0 0 1-5.08 5.08m-5.814 0a8.5 8.5 0 0 1-5.08-5.08m0-5.814a8.5 8.5 0 0 1 5.08-5.08");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ovv0shrzd"/><path class="jhhmu8bph"/></g>`,
		"fallback": "uix-sharp:singleton",
	});
}

export default Component;
