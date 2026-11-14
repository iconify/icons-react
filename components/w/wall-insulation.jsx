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
		"content": `<style>.yhwj-uhkj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 2.5v19m14-19v19M7.75 3l8.5 3.5l-8.5 3.5l8.5 3.5l-8.5 3.5l8.5 3.5");
}
</style><path class="yhwj-uhkj"/>`,
		"fallback": "uix:wall-insulation",
	});
}

export default Component;
