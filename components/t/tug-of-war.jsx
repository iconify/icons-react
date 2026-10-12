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
		"content": `<style>.c_e9d2t8h {
  d: path("m5.5 10l2.75 6m0 0l2 5m-2-5L7 21M5.9 10.9L9.25 13");
}

.eoe7_1bcb {
  cx: 19.5px;
  cy: 7.75px;
  r: 1.75px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lqhk8ib8s {
  d: path("m18.5 10l-2.75 6m0 0l-2 5m2-5L17 21m1.1-10.1L14.75 13M3 13h18m-9-2.5v5");
}

.x_nrb2b4o {
  cx: 4.5px;
  cy: 7.75px;
  r: 1.75px;
}
</style><g class="hntgybcog"><circle class="x_nrb2b4o"/><path class="c_e9d2t8h"/><circle class="eoe7_1bcb"/><path class="lqhk8ib8s"/></g>`,
		"fallback": "iconoven:tug-of-war",
	});
}

export default Component;
