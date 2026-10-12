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
		"content": `<style>.g2g7aw6cd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7 21.25l3.75-18h2.5l3.75 18M4.75 7.5h14.5M5.5 12h13m-9.57 0l7.39 6m-1.25-6l-7.39 6M4.75 7.5v2.25m14.5-2.25v2.25M5.5 12v2.25m13-2.25v2.25");
}
</style><path class="g2g7aw6cd"/>`,
		"fallback": "iconoven:power-pylon-sharp",
	});
}

export default Component;
