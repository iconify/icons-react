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
		"content": `<style>.j37zaqb7l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 8a3.75 3.75 0 0 1 7.5 0c0 2.5-2 4-7.5 11.5h7.5m3-8l6 6m0-6l-6 6");
}
</style><path class="j37zaqb7l"/>`,
		"fallback": "uix:playback-2x",
	});
}

export default Component;
