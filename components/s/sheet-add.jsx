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
		"content": `<style>.nxw6igsmj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.125 2.5h13.75A2.625 2.625 0 0 1 21.5 5.125v5.75a2.625 2.625 0 0 1-2.625 2.625H5.125A2.625 2.625 0 0 1 2.5 10.875v-5.75A2.625 2.625 0 0 1 5.125 2.5m3.625 0v11m6.5-11v11M2.5 8h19m-19 8h14m-13 0l.75 4.5H8l.75-4.5m1.5 0l.75 4.5h3.75l.75-4.5m4-.25v5m-2.5-2.5h5");
}
</style><path class="nxw6igsmj"/>`,
		"fallback": "uix:sheet-add",
	});
}

export default Component;
