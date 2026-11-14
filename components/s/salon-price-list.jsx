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
		"content": `<style>.ogqc3xmjh {
  d: path("M7.5 2.5h5v3h-5Zm-1 7.5h7m-7 4H11m3.5 4l2.25-3h4.75v6h-4.75Z");
}

.r_i533bfi {
  d: path("M13.3 21H3V3.5h14v8.7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="r_i533bfi"/><path class="ogqc3xmjh"/></g>`,
		"fallback": "uix-sharp:salon-price-list",
	});
}

export default Component;
