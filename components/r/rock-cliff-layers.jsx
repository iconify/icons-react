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
		"content": `<style>.xm651nhmp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 21V3h7L12 9h2l1.5 6h3l2 6Zm0-12H12m-8.5 6h12");
}
</style><path class="xm651nhmp"/>`,
		"fallback": "uix:rock-cliff-layers",
	});
}

export default Component;
