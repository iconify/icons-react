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
		"content": `<style>.f7bnl_b6k {
  d: path("m7.5 10l2.5 2l2.5-2");
}

.qm03awwls {
  d: path("m3 19l7-14l4 8l2.5-4l5 10Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qm03awwls"/><path class="f7bnl_b6k"/></g>`,
		"fallback": "uix-sharp:pin-mountain",
	});
}

export default Component;
