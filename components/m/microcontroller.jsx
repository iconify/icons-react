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
		"content": `<style>.pi_tq6nyo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 6h12v12H6Zm3.5-3.25V6m5-3.25V6m-5 12v3.25m5-3.25v3.25M2.75 9.5H6m-3.25 5H6m12-5h3.25m-3.25 5h3.25m-12-5.25h.01");
}
</style><path class="pi_tq6nyo"/>`,
		"fallback": "uix-sharp:microcontroller",
	});
}

export default Component;
