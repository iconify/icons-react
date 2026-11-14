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
		"content": `<style>.vmdn3cbuk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 13.5h19m-15.25 0v2m3.75-2v2m3.75-2v2m3.75-2v2m-2.25-10h4.5L17.5 9.75ZM2.5 19.5a1 1.75 0 1 0 2 0a1 1.75 0 1 0-2 0m15-1.75v3.5m2-1.75a1 1.75 0 1 0 2 0a1 1.75 0 1 0-2 0");
}
</style><path class="vmdn3cbuk"/>`,
		"fallback": "uix:service-nps",
	});
}

export default Component;
