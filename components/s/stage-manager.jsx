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
		"content": `<style>.t883iccij {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 10a7 7 0 0 1 14 0M5 10za2 2 0 0 1 2 2v2.5a2 2 0 0 1-2 2a2 2 0 0 1-2-2V12a2 2 0 0 1 2-2m14 0za2 2 0 0 1 2 2v2.5a2 2 0 0 1-2 2a2 2 0 0 1-2-2V12a2 2 0 0 1 2-2M5 16.5v1a3 3 0 0 0 3 3h2m1.25-1.25h1a1.25 1.25 0 0 1 1.25 1.25a1.25 1.25 0 0 1-1.25 1.25h-1A1.25 1.25 0 0 1 10 20.5a1.25 1.25 0 0 1 1.25-1.25");
}
</style><path class="t883iccij"/>`,
		"fallback": "uix:stage-manager",
	});
}

export default Component;
