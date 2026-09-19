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

.sgwebzbug {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.267 36.706V25.163m0-2.376v-11.52l5.76 11.52m1.188 2.376L24 36.733l5.794-11.57m1.19-2.376l5.75-11.482v11.482m0 2.376v11.57M8.542 24h30.916");
}
</style><rect class="j3s9ivbxi"/><path class="sgwebzbug"/>`,
		"fallback": "arcticons:makeacopy",
	});
}

export default Component;
