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
		"content": `<style>.xo5yt7buh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 7h15a1.75 1.75 0 0 1 1.75 1.75a1.75 1.75 0 0 1-1.75 1.75h-15A1.75 1.75 0 0 1 3 8.75A1.75 1.75 0 0 1 4.75 7M5 10.5v11m4.5-11l2-3.5m3.5 3.5L17 7M2.5 21.5h5");
}
</style><path class="xo5yt7buh"/>`,
		"fallback": "uix:level-crossing-barrier",
	});
}

export default Component;
