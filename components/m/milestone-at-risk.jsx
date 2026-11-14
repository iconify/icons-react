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
		"content": `<style>.sv2gcac1d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3v18.5M3.5 3h14l-3 4.25l3 4.25h-14m14.5 3V18m0 3h.01");
}
</style><path class="sv2gcac1d"/>`,
		"fallback": "uix:milestone-at-risk",
	});
}

export default Component;
