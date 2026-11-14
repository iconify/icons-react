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
		"content": `<style>.pfxi8m7mw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 2.5h4A1.5 1.5 0 0 1 15.5 4v3.5A1.5 1.5 0 0 0 17 9h.25a.949.949 0 0 1 .795 1.466l-4.788 7.354a1.5 1.5 0 0 1-2.514 0l-4.788-7.354A.949.949 0 0 1 6.75 9H7a1.5 1.5 0 0 0 1.5-1.5V4A1.5 1.5 0 0 1 10 2.5M2.5 19.75h19m-14.75-2.5l-2.5-1.5m13 1.5l2.5-1.5");
}
</style><path class="pfxi8m7mw"/>`,
		"fallback": "uix:sprawl",
	});
}

export default Component;
