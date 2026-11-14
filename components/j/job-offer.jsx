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
		"content": `<style>.b8wk4uber {
  d: path("M2.5 5h19v14h-19Zm0 2l7 4.75M21.5 7l-7 4.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w6t72kqub {
  d: path("M9.25 13.25a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Z");
}
</style><g class="ulnmmdpxh"><path class="b8wk4uber"/><path class="w6t72kqub"/></g>`,
		"fallback": "uix-sharp:job-offer",
	});
}

export default Component;
