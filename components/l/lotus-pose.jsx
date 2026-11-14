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
		"content": `<style>.furctvmvp {
  d: path("M3 18.5c3-4 15-4 18 0c-3 3.5-15 3.5-18 0Z");
}

.o0l_gcbcf {
  d: path("M9.5 5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0ZM5.75 16.5l2.75-6h7l2.75 6m-6.25-6v5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="o0l_gcbcf"/><path class="furctvmvp"/></g>`,
		"fallback": "uix-sharp:lotus-pose",
	});
}

export default Component;
