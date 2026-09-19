import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.j3s9ivbxi {
  width: 37px;
  height: 37px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.rre7ohb4h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 24h7.899v1.297a4 4 0 1 0 3 0V24H24m0 18.5v-7.899h1.297a4 4 0 1 0 0-3H24V24m18.5 0h-7.899v-1.297a4 4 0 1 0-3 0V24H24m0-18.5v7.899h-1.297a4 4 0 1 0 0 3H24V24");
}
</style><path class="rre7ohb4h"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:locus-map-pro",
	});
}

export default Component;
