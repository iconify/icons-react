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
		"content": `<style>.vz_q6mbkl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.25 3.5c-.6.75.6 1.5 0 2.25m5.5-2.25c-.6.75.6 1.5 0 2.25M12 5c-.6.75.6 1.5 0 2.25M5.25 10.5h13.5a6.75 6.75 0 0 1-13.5 0ZM7 12.75h10M5.25 10.5H3.5V14h1.75m13.5-3.5h1.75V14h-1.75");
}
</style><path class="vz_q6mbkl"/>`,
		"fallback": "iconoven:karahi-sharp",
	});
}

export default Component;
