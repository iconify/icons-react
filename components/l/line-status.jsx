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
		"content": `<style>.iql4fubuz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 6h8.5M3 12.5h8.5M3 19h8.5m3-13h.01m-.01 6.5h.01M14.5 19h.01m2.74-13l1.5 1.5l2.75-3.25");
}
</style><path class="iql4fubuz"/>`,
		"fallback": "uix:line-status",
	});
}

export default Component;
