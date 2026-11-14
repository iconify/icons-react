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
		"content": `<style>.dvr1d_u_m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.5 20.5l1-10.5L7 5l6-1.5L18 5l3 4.5l.5 11h-5V15a4.5 4.5 0 0 0-9 0v5.5Zm4-11l3-2");
}
</style><path class="dvr1d_u_m"/>`,
		"fallback": "uix:rock-arch-natural",
	});
}

export default Component;
