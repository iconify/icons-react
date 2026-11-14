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
		"content": `<style>.f98jlyg7b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 3.5v17m0-13a4.5 4.5 0 0 1 0 9m6.495-8.25a7.5 7.5 0 0 1 0 7.5m3.031-9.25a11 11 0 0 1 0 11m3.031-12.75a14.5 14.5 0 0 1 0 14.5");
}
</style><path class="f98jlyg7b"/>`,
		"fallback": "uix:motion-sensor",
	});
}

export default Component;
