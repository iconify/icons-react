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
		"content": `<style>.j92leabef {
  d: path("M18.5 17.25V14.5a1 1 0 0 1 2 0v2.75a2.25 2.25 0 1 1-2 0Z");
}

.ngwtpxbzc {
  d: path("M14.401 19.608L8.5 17.5l-6 2.5V6l6-2.5l7 2.5l6-2.5v7.567M8.5 3.5v14m7-11.5v10.2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ngwtpxbzc"/><path class="j92leabef"/></g>`,
		"fallback": "uix-sharp:temperature-map",
	});
}

export default Component;
