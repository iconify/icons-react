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
		"content": `<style>.u_yvbjbil {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 9.58a6.5 6.5 0 1 0 8.5 0M9.5 5.5V12m9-9.25a3.5 3.5 0 1 0 2.75 5.5a3.25 3.25 0 0 1-2.75-5.5Z");
}
</style><path class="u_yvbjbil"/>`,
		"fallback": "iconoven:standby-power-sharp",
	});
}

export default Component;
