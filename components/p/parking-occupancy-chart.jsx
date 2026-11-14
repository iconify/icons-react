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
		"content": `<style>.gdom51bcy {
  d: path("M7.5 11V3.5h2.25a2.25 2.25 0 0 1 0 4.5H7.5m2 9.5v-3.25M14 17.5V10m4.5 7.5v-12");
}

.qe97cg-lx {
  d: path("M3 3v18h18");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qe97cg-lx"/><path class="gdom51bcy"/></g>`,
		"fallback": "uix-sharp:parking-occupancy-chart",
	});
}

export default Component;
