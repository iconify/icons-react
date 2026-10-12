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
		"content": `<style>.jiqm1yb4m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 8.75a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 1 1 0-10.5m3.71 1.54L20 4m-5.25 0H20v5.25");
}
</style><path class="jiqm1yb4m"/>`,
		"fallback": "iconoven:male-sign",
	});
}

export default Component;
