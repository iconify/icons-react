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
		"content": `<style>.z42jgmbic {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 3h10v5.5a5 5 0 0 1-10 0Zm0 2H4.5a2 2 0 0 0 0 4H6m10-4h1.5a2 2 0 0 1 0 4H16m-5 4.5V19m-2.5 0h3.7m5.8-4.5v7m-3-3l3 3l3-3");
}
</style><path class="z42jgmbic"/>`,
		"fallback": "uix:league-relegation",
	});
}

export default Component;
