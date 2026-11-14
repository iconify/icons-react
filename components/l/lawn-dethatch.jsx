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
		"content": `<style>.yoaxz0-fo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 14L20 2.5M3.5 14h10m-9 0v4m4-4v4m4-4v4m-10 3h19m-6-3q1.5-2.5 3 0q1.5-2.5 3 0");
}
</style><path class="yoaxz0-fo"/>`,
		"fallback": "uix:lawn-dethatch",
	});
}

export default Component;
