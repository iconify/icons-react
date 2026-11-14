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
		"content": `<style>.g2e91bc2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.5 7.5l3.5-3v15m3.5-8.5l6.5 6.5m0-6.5l-6.5 6.5");
}
</style><path class="g2e91bc2k"/>`,
		"fallback": "uix:playback-1x",
	});
}

export default Component;
