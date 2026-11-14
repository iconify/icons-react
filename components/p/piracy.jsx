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
		"content": `<style>.fhbdpacgr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.25 14v-1.25a5.5 5.5 0 1 1 5.5 0V14ZM5 15.5L19 21m0-5.5L5 21M9.75 8.75h.01m4.49 0h.01");
}
</style><path class="fhbdpacgr"/>`,
		"fallback": "uix-sharp:piracy",
	});
}

export default Component;
