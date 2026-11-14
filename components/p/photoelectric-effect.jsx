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
		"content": `<style>.lxy50ya1f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 17h15.5a1.75 1.75 0 0 1 1.75 1.75v.5A1.75 1.75 0 0 1 19.75 21H4.25a1.75 1.75 0 0 1-1.75-1.75v-.5A1.75 1.75 0 0 1 4.25 17M4 3l6.5 11.25m-3.5 0h3.5v-3.5m3 3.5l2.5-4m0-4.75a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}
</style><path class="lxy50ya1f"/>`,
		"fallback": "uix:photoelectric-effect",
	});
}

export default Component;
