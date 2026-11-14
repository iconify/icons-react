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
		"content": `<style>.b6jdfhbjn {
  d: path("M13.492 15.786L10 21.5l-5.5-9l2-6.5h7l1.927 6.262M6.5 6V3h7v3M10 21.5V14");
}

.h-clnccpu {
  d: path("M8.5 12.25a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM16.25 16a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm-1.75 5.75a3.5 3 0 0 1 7 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="b6jdfhbjn"/><path class="h-clnccpu"/></g>`,
		"fallback": "uix-sharp:power-of-attorney",
	});
}

export default Component;
