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
		"content": `<style>.kkdql4bcp {
  d: path("M2.5 2.5h19v14h-19Zm9.5 14v5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w7iy3qb8j {
  d: path("M6 13.75v-8.5h2.5a2.5 2.5 0 0 1 0 5H6M17.5 7.5c0-.75-.75-1.25-1.75-1.25S14 6.75 14 7.75c0 2 3.5 1.25 3.5 3.5c0 1-.75 1.5-1.75 1.5S14 12.25 14 11.5m1.75-6.25v8.5");
}
</style><g class="ulnmmdpxh"><path class="kkdql4bcp"/><path class="w7iy3qb8j"/></g>`,
		"fallback": "uix-sharp:parking-rates-board",
	});
}

export default Component;
