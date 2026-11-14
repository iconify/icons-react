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
		"content": `<style>.d9iomlbks {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3v11.5h9m-5 0v7m-3.5 0h7m1.5-7l3.5-2.75M15.25 10a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}
</style><path class="d9iomlbks"/>`,
		"fallback": "uix:leg-extension",
	});
}

export default Component;
