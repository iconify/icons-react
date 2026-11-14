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
		"content": `<style>.eqscv3iin {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 9.5h3a1 1 0 0 1 1 1a1 1 0 0 0 1 1a1 1 0 0 1 1 1v.25a.75.75 0 0 0 .75.75a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-.75.75a.75.75 0 0 0-.75.75v.25a1 1 0 0 1-1 1a1 1 0 0 0-1 1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1a1 1 0 0 0-1-1a1 1 0 0 1-1-1v-.25a.75.75 0 0 0-.75-.75a.75.75 0 0 1-.75-.75v-2.5a.75.75 0 0 1 .75-.75a.75.75 0 0 0 .75-.75v-.25a1 1 0 0 1 1-1a1 1 0 0 0 1-1a1 1 0 0 1 1-1m1.5 0V7h3V4.5H16m0 0h4m-2-2v4");
}
</style><path class="eqscv3iin"/>`,
		"fallback": "uix:pixel-bomb",
	});
}

export default Component;
