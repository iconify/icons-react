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
		"content": `<style>.c30s-ep7t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.4 12.5H2.5v-10H17v9.2m-8.25.8V19m2.45 2.5H4.5V19h7.3M5.5 6h5m-5 3.25H8m3 0h3m1.75 5.25h4.5L22 21.75h-8ZM18 17h.01");
}
</style><path class="c30s-ep7t"/>`,
		"fallback": "uix-sharp:pos-weighed-item",
	});
}

export default Component;
