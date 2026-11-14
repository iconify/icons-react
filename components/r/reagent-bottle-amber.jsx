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
		"content": `<style>.yt__57b-b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 2.5h3A1.5 1.5 0 0 1 15 4a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 4a1.5 1.5 0 0 1 1.5-1.5m-.5 3V8c-4 .5-5.5 2-5.5 4.5v7a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-7c0-2.5-1.5-4-5.5-4.5V5.5m-9.5 8h15M4.5 18h15");
}
</style><path class="yt__57b-b"/>`,
		"fallback": "uix:reagent-bottle-amber",
	});
}

export default Component;
