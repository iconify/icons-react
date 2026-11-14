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
		"content": `<style>.jk2o8wb5w {
  d: path("M6.5 8a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0ZM4 21.5c0-2.5 3.5-5 8-5s8 2.5 8 5M9.25 6.5l1.75 1m3.75-1L13 7.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vnd9jo0jo {
  d: path("M10.25 11q1.75-1.25 3.5 0");
}
</style><g class="ulnmmdpxh"><path class="jk2o8wb5w"/><path class="vnd9jo0jo"/></g>`,
		"fallback": "uix-sharp:person-angry",
	});
}

export default Component;
