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
		"content": `<style>.uso4ihbsw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.5 21.5l4-19m11 19l-4-19M3.75 18h16.5M5 12h14M6.5 6h11");
}
</style><path class="uso4ihbsw"/>`,
		"fallback": "uix:railway-line",
	});
}

export default Component;
