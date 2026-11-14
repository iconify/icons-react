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
		"content": `<style>.d5jo19m1a {
  d: path("M8.5 8.5h7v7h-7Z");
}

.qupeo_3fy {
  d: path("m10 2l2 2l-2 2");
}

.t5mofjtby {
  d: path("m14 18l-2 2l2 2m-6-3.072A8 8 0 0 1 12 4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xddcc2bdh {
  d: path("M16 5.072A8 8 0 0 1 12 20");
}
</style><g class="ulnmmdpxh"><path class="d5jo19m1a"/><path class="xddcc2bdh"/><path class="t5mofjtby"/><path class="qupeo_3fy"/></g>`,
		"fallback": "uix-sharp:refactor",
	});
}

export default Component;
