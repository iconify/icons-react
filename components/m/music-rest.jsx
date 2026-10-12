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
		"content": `<style>.d3ynn-a9l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m10.25 2.75l4 4.75l-3.5 4l4 4.5m0 0c-2.5-1-5.5-.25-5 2.25c.25 1.35 1.15 2.35 2 3");
}
</style><path class="d3ynn-a9l"/>`,
		"fallback": "iconoven:music-rest",
	});
}

export default Component;
