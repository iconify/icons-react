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
		"content": `<style>.wi2jd3bxf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 2.5h10V9H3ZM8 9v1.5m4.2 4H4v-4h16v1m-7.8 10H2.5v-4h8.7m-7.2-3l-1.5 3m5-5h.01m4.49 0h.01m-5.51 7h4M14 18a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm4-2.25v2.75m0 2h.01");
}
</style><path class="wi2jd3bxf"/>`,
		"fallback": "uix-sharp:pos-drawer-open-alert",
	});
}

export default Component;
