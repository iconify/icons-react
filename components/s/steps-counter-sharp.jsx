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
		"content": `<style>.en1zq61jm {
  cx: 7.5px;
  cy: 17.25px;
  r: 2px;
}

.ml2-bv_xv {
  d: path("M16.5 4.75a3 4.75 0 1 1 0 9.5a3 4.75 0 1 1 0-9.5Z");
}

.wcgozvksy {
  d: path("M7.5 2.75a3 4.75 0 1 1 0 9.5a3 4.75 0 1 1 0-9.5Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zop88fbkj {
  cx: 16.5px;
  cy: 19.25px;
  r: 2px;
}
</style><g class="x2cwu0gfd"><path class="wcgozvksy"/><circle class="en1zq61jm"/><path class="ml2-bv_xv"/><circle class="zop88fbkj"/></g>`,
		"fallback": "iconoven:steps-counter-sharp",
	});
}

export default Component;
