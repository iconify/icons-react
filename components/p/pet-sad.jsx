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
		"content": `<style>.ez_pnccrj {
  d: path("M9 17.75q3-2.25 6 0");
}

.fkit1lrbu {
  d: path("m4.5 3.5l4 3.5a8.5 8.5 0 0 1 7 0l4-3.5l.5 6.5a8.5 8.5 0 1 1-16 0Zm3 10l2.5-1m6.5 1l-2.5-1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="fkit1lrbu"/><path class="ez_pnccrj"/></g>`,
		"fallback": "uix-sharp:pet-sad",
	});
}

export default Component;
