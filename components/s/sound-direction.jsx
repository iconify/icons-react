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
		"content": `<style>.k_ddi0biy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 12h.01m2.561-3.064a4 4 0 0 1 0 6.128m2.571-9.192a8 8 0 0 1 0 12.256M15.5 12H21m-3-3l3 3l-3 3");
}
</style><path class="k_ddi0biy"/>`,
		"fallback": "uix:sound-direction",
	});
}

export default Component;
