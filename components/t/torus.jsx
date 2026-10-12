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
		"content": `<style>.lgikgacmn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 12a9.25 6.75 0 1 0 18.5 0a9.25 6.75 0 1 0-18.5 0m4.75-.5a4.5 2.5 0 1 1 9 0a4.5 2.5 0 1 1-9 0");
}
</style><path class="lgikgacmn"/>`,
		"fallback": "iconoven:torus",
	});
}

export default Component;
