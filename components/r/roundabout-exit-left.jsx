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
		"content": `<style>.i1y2_jbml {
  d: path("M6.5 7.25L4.25 9.5l2.25 2.25M14 14.5a5 5 0 0 1-4-2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.whl0dcc0b {
  d: path("M14 21.5v-7a5 5 0 1 0-5-5H4.25");
}
</style><g class="ulnmmdpxh"><path class="whl0dcc0b"/><path class="i1y2_jbml"/></g>`,
		"fallback": "uix-sharp:roundabout-exit-left",
	});
}

export default Component;
