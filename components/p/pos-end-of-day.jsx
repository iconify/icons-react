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
		"content": `<style>.uovmpsbvl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.2 12.5H2.5v-10H17v8.9m-8.25 1.1V19m3.95 2.5H4.5V19H12M5.5 6h5m-5 3.25H8m3 0h3m6.089 6.76a3.25 3.25 0 1 1-4.178 0M18 14.25v3.5");
}
</style><path class="uovmpsbvl"/>`,
		"fallback": "uix-sharp:pos-end-of-day",
	});
}

export default Component;
