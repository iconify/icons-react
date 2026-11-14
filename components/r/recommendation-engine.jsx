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
		"content": `<style>.aqoq8jn3p {
  d: path("M7 6.5h8.5V14H7Zm0 11h5m6-2.75C18 17 19 18 21.25 18C19 18 18 19 18 21.25C18 19 17 18 14.75 18C17 18 18 17 18 14.75Z");
}

.lf0cyr3xc {
  d: path("M15.2 21H3V3h16.5v11.7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lf0cyr3xc"/><path class="aqoq8jn3p"/></g>`,
		"fallback": "uix-sharp:recommendation-engine",
	});
}

export default Component;
