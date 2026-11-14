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
		"content": `<style>.n33xrbjjp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.772 20.5H4c-.6 0-1-.4-1-1c0-3.25 3.25-5.5 7.5-5.5c1.801 0 3.422.404 4.692 1.117M6.5 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0M18 15v6m-3-3h6");
}
</style><path class="n33xrbjjp"/>`,
		"fallback": "uix:lead-add",
	});
}

export default Component;
