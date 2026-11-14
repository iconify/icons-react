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
		"content": `<style>.emfwp8bnq {
  d: path("M5.5 2.5h13l2.5 10H3Zm6.5 0v10m-7.75-5h15.5m-11.25 5v8m-3 0h6m3 1L17 19l1.5 1.5l3-3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xapqp6brg {
  d: path("M18.5 17.5h3v3");
}
</style><g class="ulnmmdpxh"><path class="emfwp8bnq"/><path class="xapqp6brg"/></g>`,
		"fallback": "uix-sharp:mppt",
	});
}

export default Component;
