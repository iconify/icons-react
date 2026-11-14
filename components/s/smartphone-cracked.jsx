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

.viv8vacgu {
  d: path("m15 2.5l-2.5 5l2 3L11 16m1.5-8.5L9 8.5");
}

.wb-3accoe {
  d: path("M6 2.5h12v19H6ZM10.5 18h3");
}
</style><g class="ulnmmdpxh"><path class="wb-3accoe"/><path class="viv8vacgu"/></g>`,
		"fallback": "uix-sharp:smartphone-cracked",
	});
}

export default Component;
