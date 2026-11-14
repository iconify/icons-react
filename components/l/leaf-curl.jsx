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
		"content": `<style>.ag2o0lqib {
  d: path("M6 18c6 1 11.5-2.5 13.5-8.5M3.75 20.25L6 18m0 0l6.5-6.5");
}

.g5c600tns {
  d: path("M6 18C4.5 11 8.5 5 16 4.5c3-.25 4.75 1.5 4.25 3.75c-.5 2-3 2.5-4.5 1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="g5c600tns"/><path class="ag2o0lqib"/></g>`,
		"fallback": "uix-sharp:leaf-curl",
	});
}

export default Component;
