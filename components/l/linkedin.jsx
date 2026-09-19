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
		"content": `<style>.db8r_5tsp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.002 20.126V34.5m15.895 0v-8.95a5.424 5.424 0 0 0-5.425-5.424h0a5.424 5.424 0 0 0-5.424 5.424m0 8.95V20.126");
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

.y2vtgabkn {
  cx: 17.002px;
  cy: 15.399px;
  r: 1.899px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><rect class="j3s9ivbxi"/><circle class="y2vtgabkn"/><path class="db8r_5tsp"/>`,
		"fallback": "arcticons:linkedin",
	});
}

export default Component;
