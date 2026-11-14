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
		"content": `<style>.nt2g8ubuv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 12L3 8l3-1.75m2.5-1.5l3-1.75l3.25 1.5m3 1L21 7l-1 5m-.5 3l-1 5l-5.25-.5m-3 0L5 19l-.75-4");
}
</style><path class="nt2g8ubuv"/>`,
		"fallback": "uix:map-layer-boundaries",
	});
}

export default Component;
