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
		"content": `<style>.cn4609kxm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 13.5a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0m7.5-11V6M9.5 2.5h5m3.75 3.25l1.5 1.5M12 13.5l3-3M5.75 5.75l-1.5 1.5");
}
</style><path class="cn4609kxm"/>`,
		"fallback": "uix:stopwatch-lap",
	});
}

export default Component;
