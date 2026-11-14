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
		"content": `<style>.a74hefbdn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 20.5V17m3.25 3.5V13m3.25 7.5V9m3.25 11.5v-.4m0-3.2V4.5m5.25 10v7m-3-3l3 3l3-3");
}
</style><path class="a74hefbdn"/>`,
		"fallback": "uix:signal-down",
	});
}

export default Component;
