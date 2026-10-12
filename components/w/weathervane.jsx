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
		"content": `<style>.qpqkrgb9j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 3.5L5.25 6l-2.5 2.5M5.25 6h12M12 6v15.25M8 13h8m-7 8.25h6m5.83-15.52l-3.41-2.21q-.42-.27-.42.23v4.5q0 .5.42.23l3.41-2.21q.42-.27 0-.54");
}
</style><path class="qpqkrgb9j"/>`,
		"fallback": "iconoven:weathervane",
	});
}

export default Component;
