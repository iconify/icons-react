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
		"content": `<style>.mhqj2bofm {
  cx: 10.75px;
  cy: 14px;
  r: 7.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.znsiulw2e {
  d: path("M10.75 14V9.75M8.5 3.25H13m-2.25 0v3.5m7.5-4l.36 2.64l2.64.36l-2.64.36l-.36 2.64l-.36-2.64l-2.64-.36l2.64-.36z");
}
</style><g class="x2cwu0gfd"><circle class="mhqj2bofm"/><path class="znsiulw2e"/></g>`,
		"fallback": "iconoven:latency-sharp",
	});
}

export default Component;
