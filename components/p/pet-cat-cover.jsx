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
		"content": `<style>.ev8aml37e {
  d: path("M11 16h2l-1 1.25Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x0p5hhd9g {
  d: path("m4.5 4.5l4.5 4c1.5-.5 4.5-.5 6 0l4.5-4V13c0 4.5-3 7.5-7.5 7.5s-7.5-3-7.5-7.5ZM9 13h.01M15 13h.01");
}
</style><g class="ulnmmdpxh"><path class="x0p5hhd9g"/><path class="ev8aml37e"/></g>`,
		"fallback": "uix-sharp:pet-cat-cover",
	});
}

export default Component;
