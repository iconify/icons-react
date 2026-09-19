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
		"content": `<style>.be8124b7n {
  d: path("M19.168 30.049c.884 1.156 2.23 1.951 4.46 1.951H24a5.3 5.3 0 0 0 5.3-5.3v-5.4");
}

.ib21wsbmr {
  cx: 24px;
  cy: 21.3px;
  r: 5.3px;
}

.j3s9ivbxi {
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

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><rect class="j3s9ivbxi"/><g class="y9tr6bcfx"><circle class="ib21wsbmr"/><path class="be8124b7n"/></g>`,
		"fallback": "arcticons:number-9",
	});
}

export default Component;
