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
		"content": `<style>.e9c6417dr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 3v17.5m0-17h12l-2.5 4l2.5 4H6m-3 9h9m6-5.5v6m-3-3h6");
}
</style><path class="e9c6417dr"/>`,
		"fallback": "uix:milestone-add",
	});
}

export default Component;
