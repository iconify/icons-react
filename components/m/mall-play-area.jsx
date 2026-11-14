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
		"content": `<style>.h3d289b9i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 3.5v18m4-18v18m0-14h2c4.5 0 5 12 11.5 12M4 11.5h4m-4 4h4m-4-8h4m-5.5 14h19");
}
</style><path class="h3d289b9i"/>`,
		"fallback": "uix:mall-play-area",
	});
}

export default Component;
