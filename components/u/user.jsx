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
		"content": `<style>.xp6eu6mbc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 20c0-3.3 3.6-5.5 8-5.5s8 2.2 8 5.5c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1M8 7.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0");
}
</style><path class="xp6eu6mbc"/>`,
		"fallback": "uix:user",
	});
}

export default Component;
