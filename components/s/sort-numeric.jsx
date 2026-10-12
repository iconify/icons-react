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
		"content": `<style>.bsohlcpxt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 6.5H10M3.75 12H10m-6.25 5.5H10m4.5 1.75V4.75m-2 2l2-2l2 2m2.5-2v14.5m-2-2l2 2l2-2");
}
</style><path class="bsohlcpxt"/>`,
		"fallback": "iconoven:sort-numeric",
	});
}

export default Component;
