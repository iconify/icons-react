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
		"content": `<style>.jiijv7bbp {
  d: path("M5.75 9.25L8.5 6.5l2.75 2.75M16 7v6m-2-2l2 2l2-2");
}

.tkh-ztz9c {
  d: path("M3 3h18v18H3Zm5.5 15V6.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tkh-ztz9c"/><path class="jiijv7bbp"/></g>`,
		"fallback": "uix-sharp:oncoming-priority-sign",
	});
}

export default Component;
