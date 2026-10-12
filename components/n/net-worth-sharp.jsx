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
		"content": `<style>.e74zv_bvh {
  d: path("M3.75 20.25h11v-1c0-2.9-2.6-5-6-5s-6 2.1-6 5v1z");
}

.kulgnybwf {
  cx: 8.75px;
  cy: 7.5px;
  r: 3.75px;
}

.meibhcc_y {
  d: path("m18.88 8.02l-.35-.75h-1.94v.86c0 1.22 2.34.61 2.34 1.78v.83h-2.018l-.292-.73");
}

.wlpeuackt {
  cx: 17.75px;
  cy: 9px;
  r: 3.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="kulgnybwf"/><path class="e74zv_bvh"/><circle class="wlpeuackt"/><path class="meibhcc_y"/></g>`,
		"fallback": "iconoven:net-worth-sharp",
	});
}

export default Component;
