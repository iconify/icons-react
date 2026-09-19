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
		"content": `<style>.bdfttfblb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.476 27.281A4 4 0 0 1 24 29.3h0a4 4 0 0 1-4-4v-2.6a4 4 0 0 1 4-4h0a4 4 0 0 1 4 4V24h-8");
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
</style><rect class="j3s9ivbxi"/><path class="bdfttfblb"/>`,
		"fallback": "arcticons:letter-lowercase-e",
	});
}

export default Component;
