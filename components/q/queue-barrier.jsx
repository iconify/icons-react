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
		"content": `<style>.m5_g07f7p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 5.5v14m14-14v14m-16.5 2h5m9 0h5M3.75 3.75a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m14 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0M5 7.75h14m-14 3h14");
}
</style><path class="m5_g07f7p"/>`,
		"fallback": "uix:queue-barrier",
	});
}

export default Component;
