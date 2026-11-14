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
		"content": `<style>.hmen-bbsn {
  d: path("M17.5 10.75c-.5.75-.5 1.5-.25 2.25m-8-4.25l3 1.75");
}

.uafy2p8cb {
  d: path("M2.5 2.5v19m0-6H13m-10.5 4l4-4M6 13V8.5c0-1 1-1.5 2-1.25L11 8l3.5 2.25c3.5.5 7 1 7 2.75Zm0 0h15.5v2.5H6Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="uafy2p8cb"/><path class="hmen-bbsn"/></g>`,
		"fallback": "uix-sharp:shoe-display-wall",
	});
}

export default Component;
