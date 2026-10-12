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
		"content": `<style>.vnoik1mij {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.25 2.75h5V10l1.5 2.25v2.5h-9.5v-2.5L8.75 10V2.75zm.5 3.25h2.5m-4.5 11.5L12 19.531l3.25-2.031m-8.5 2.25c3.25 1.5 7.25 1.5 10.5 0");
}
</style><path class="vnoik1mij"/>`,
		"fallback": "iconoven:ultrasound-probe-sharp",
	});
}

export default Component;
