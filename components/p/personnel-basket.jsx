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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wzyy9ibkr {
  d: path("m4.5 14l7.5-4l7.5 4m-15 0h15L18 21H6Z");
}

.y6449y4_w {
  d: path("M14.5 2.5v5a2.5 2.5 0 0 1-5 0");
}
</style><g class="ulnmmdpxh"><path class="y6449y4_w"/><path class="wzyy9ibkr"/></g>`,
		"fallback": "uix-sharp:personnel-basket",
	});
}

export default Component;
