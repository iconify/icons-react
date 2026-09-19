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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ros899qmg {
  width: 8px;
  height: 10.6px;
  x: 20px;
  y: 16px;
  rx: 4px;
  ry: 4px;
}

.rqpwkubzd {
  d: path("M28 16v12a4 4 0 0 1-4 4h0a4 4 0 0 1-2.828-1.171");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="cpk0fnbgt"/><g class="y9tr6bcfx"><path class="rqpwkubzd"/><rect transform="matrix(-1 0 0 -1 48 42.6)" class="ros899qmg"/></g>`,
		"fallback": "arcticons:letter-lowercase-circle-g",
	});
}

export default Component;
