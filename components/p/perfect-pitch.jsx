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
		"content": `<style>.p-ckco63x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 3v7a4.5 4.5 0 0 0 9 0V3M10 14.5v7m4.5-1.75a2.25 1.75 0 1 0 4.5 0a2.25 1.75 0 1 0-4.5 0m4.5 0V13.5");
}
</style><path class="p-ckco63x"/>`,
		"fallback": "uix:perfect-pitch",
	});
}

export default Component;
