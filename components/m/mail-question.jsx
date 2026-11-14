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

.tkcj85b3d {
  d: path("m6 7.5l5 3.5l5-3.5m.25 9c0-1 .75-1.75 1.75-1.75s1.75.75 1.75 1.75c0 1.25-1.75 1.25-1.75 2.5m0 2.25h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="d_vcnnbnq"/><path class="tkcj85b3d"/></g>`,
		"fallback": "uix-sharp:mail-question",
	});
}

export default Component;
