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

.x9e36qb2f {
  d: path("M3.5 3h17v18h-17Z");
}

.y5q52dczf {
  d: path("M9 3a3 3 0 0 0 6 0M8 9v12m8-12v12");
}
</style><g class="ulnmmdpxh"><path class="x9e36qb2f"/><path class="y5q52dczf"/></g>`,
		"fallback": "uix-sharp:soccer-jersey",
	});
}

export default Component;
