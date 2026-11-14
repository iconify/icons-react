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
		"content": `<style>.dnjnduz3q {
  d: path("M15 3c-1.75 2.25-1.75 4.5 0 6m0 0c2-.5 4 .5 5.25 3M15 9c.25 2.25-2.5 3.5-5.25 3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xs7e8u-fi {
  d: path("M9 9a6 6 0 1 0 12 0A6 6 0 1 0 9 9ZM3 21.5Q3.5 12 6.25 9");
}
</style><g class="ulnmmdpxh"><path class="xs7e8u-fi"/><path class="dnjnduz3q"/></g>`,
		"fallback": "uix-sharp:volleyball-set",
	});
}

export default Component;
