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
		"content": `<style>.pzsjkwbqt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 3l5 1.75V11c0 4.5-2 8-5 10c-3-2-5-5.5-5-10V4.75ZM2.5 7q3.5 5 0 10m19-10q-3.5 5 0 10");
}
</style><path class="pzsjkwbqt"/>`,
		"fallback": "uix:magnetic-shield",
	});
}

export default Component;
