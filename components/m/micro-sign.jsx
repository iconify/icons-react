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
		"content": `<style>.sbkx6mgvf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 3.75V16m0-6.75a3.5 3.5 0 0 0 7 0v-5.5m0 5.5v2.5c0 .75.5 1.25 1.25 1.25M3.5 20.25h17m-17 0v-2m4.5 2V19m4 1.25v-2m4 2V19m4.5 1.25v-2");
}
</style><path class="sbkx6mgvf"/>`,
		"fallback": "iconoven:micro-sign",
	});
}

export default Component;
