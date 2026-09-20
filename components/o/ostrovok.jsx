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
		"content": `<style>.h9iho-b0m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.28 14.248v13.03m1.716 4.75a1.72 1.72 0 0 1-3.44.007v-.007c0-.95.77-1.72 1.72-1.72A1.72 1.72 0 0 1 37 32.025v.003zm-6.733-7.979a9.63 9.63 0 0 1-9.63 9.63A9.63 9.63 0 0 1 11 24.053v-.004a9.63 9.63 0 0 1 19.259 0z");
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
</style><path class="h9iho-b0m"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:ostrovok",
	});
}

export default Component;
