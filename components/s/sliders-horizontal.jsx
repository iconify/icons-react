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
		"content": `<style>.vf95kqb2b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 6h9.25m4.5 0h3.25m-17 6h2.25m4.5 0H20.5m-17 6h7.25m4.5 0h5.25M12.75 6a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m-7 6a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m5 6a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0");
}
</style><path class="vf95kqb2b"/>`,
		"fallback": "uix:sliders-horizontal",
	});
}

export default Component;
