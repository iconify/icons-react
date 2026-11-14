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
		"content": `<style>.hzlhjk3xk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 20.5v-9c0-1.5 1-2 1-3V4h2v4.5c0 1 1 1.5 1 3v9m3 0V14c0-1.5 1-2 1-3V7h2v4c0 1 1 1.5 1 3v6.5m3 0V16c0-1.5 1-2 1-3v-2.5h2V13c0 1 1 1.5 1 3v4.5m-18.5 0h19");
}
</style><path class="hzlhjk3xk"/>`,
		"fallback": "uix:liquor-shelf",
	});
}

export default Component;
