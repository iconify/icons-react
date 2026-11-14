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
		"content": `<style>.kuxoreb3g {
  d: path("M2.5 18L6 11h15.5L18 18Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zsl6cp7td {
  d: path("M16 8a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm-5.75 10l3.5-7");
}
</style><g class="ulnmmdpxh"><path class="kuxoreb3g"/><path class="zsl6cp7td"/></g>`,
		"fallback": "uix-sharp:ping-pong-edge-ball",
	});
}

export default Component;
