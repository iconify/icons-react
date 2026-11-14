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
		"content": `<style>.g6ulkabjn {
  d: path("M2.5 2.5h19v19h-19Z");
}

.ijv3yb53n {
  d: path("M5.25 18.75V12.5h13.5v6.25H15.5a3.5 3.5 0 0 0-7 0ZM12 5.25v4.5M9.75 7.5L12 9.75l2.25-2.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="g6ulkabjn"/><path class="ijv3yb53n"/></g>`,
		"fallback": "uix-sharp:low-bridge-sign",
	});
}

export default Component;
