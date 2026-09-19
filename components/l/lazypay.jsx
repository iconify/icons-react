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
		"content": `<style>.h9xgr0pvf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5 14.945L28.156 24L5 33.055");
}

.trafj028l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.844 14.945L43 24l-23.156 9.055");
}
</style><path class="trafj028l"/><path class="h9xgr0pvf"/>`,
		"fallback": "arcticons:lazypay",
	});
}

export default Component;
