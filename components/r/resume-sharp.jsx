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
		"content": `<style>.mqbcq6bbi {
  d: path("M13.75 2.75v5.5h5.5");
}

.n-dokxb-c {
  cx: 9.25px;
  cy: 10.5px;
  r: 1.75px;
}

.opr54_b6k {
  d: path("M13 11.75h2.25m-7 3.5h7.5M8.25 18h7.5");
}

.rh2140hgr {
  d: path("M13.75 2.75h-9v18.5h14.5v-13Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="rh2140hgr"/><path class="mqbcq6bbi"/><circle class="n-dokxb-c"/><path class="opr54_b6k"/></g>`,
		"fallback": "iconoven:resume-sharp",
	});
}

export default Component;
