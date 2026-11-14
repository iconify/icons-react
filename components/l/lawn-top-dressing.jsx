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
		"content": `<style>.hedqp4bpq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20h19m-18 0l2-5l2 5l2-5l2 5l2-5l2 5l2-5l2 5l1-2.5M5 10.5h.01m4.74 0h.01m4.49 0h.01m4.74 0h.01");
}
</style><path class="hedqp4bpq"/>`,
		"fallback": "uix-sharp:lawn-top-dressing",
	});
}

export default Component;
