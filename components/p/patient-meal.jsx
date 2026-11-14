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
		"content": `<style>.vxric3b8s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 17h16.5a1.25 1.25 0 0 1 1.25 1.25a1.25 1.25 0 0 1-1.25 1.25H3.75a1.25 1.25 0 0 1-1.25-1.25A1.25 1.25 0 0 1 3.75 17m-.25-2c0-4.25 2.75-6.5 6.25-6.5S16 10.75 16 15Zm6.25-8.25h.01M19.25 11zA1.75 1.75 0 0 1 21 12.75v.5A1.75 1.75 0 0 1 19.25 15a1.75 1.75 0 0 1-1.75-1.75v-.5A1.75 1.75 0 0 1 19.25 11");
}
</style><path class="vxric3b8s"/>`,
		"fallback": "uix:patient-meal",
	});
}

export default Component;
