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

.ta3ohubgj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.5 13.5c0-2.216 1.784-4 4-4h21c2.216 0 4 1.784 4 4m-33 0h37m-9.256 19.125v-9.25L28.622 30L24 23.375L19.378 30l-4.622-6.625v9.25M24 23.375v9.25");
}
</style><rect class="j3s9ivbxi"/><path class="ta3ohubgj"/>`,
		"fallback": "arcticons:mymonero",
	});
}

export default Component;
