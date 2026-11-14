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
		"content": `<style>.ogyrpgb_k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 2.5h11A2.5 2.5 0 0 1 20 5v4.5a2.5 2.5 0 0 1-2.5 2.5h-2.75a2.75 2.75 0 0 0-5.5 0H6.5A2.5 2.5 0 0 1 4 9.5V5a2.5 2.5 0 0 1 2.5-2.5M2 7.25h2m16 0h2M18 15v6m-3-3h6");
}
</style><path class="ogyrpgb_k"/>`,
		"fallback": "uix:vr-headset-plus",
	});
}

export default Component;
