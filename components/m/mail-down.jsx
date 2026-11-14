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
		"content": `<style>.d_vcnnbnq {
  d: path("M4.5 4h13a2 2 0 0 1 2 2v5.5H14l-3 5v.5H4.5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z");
}

.m84tz8w2r {
  d: path("m6 7.5l5 3.5l5-3.5m2 7.5v6m-2.5-2.5L18 21l2.5-2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="d_vcnnbnq"/><path class="m84tz8w2r"/></g>`,
		"fallback": "uix-sharp:mail-down",
	});
}

export default Component;
