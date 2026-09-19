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

.vmxf93b4c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.36 38.035v-19.2h6.285c3.553 0 6.434 2.887 6.434 6.448s-2.88 6.448-6.434 6.448H11.36m6.287.002l6.288 6.297M36.64 13.781a3.815 3.815 0 1 0-7.63 0v3.887a3.815 3.815 0 1 0 7.63 0h-3.815");
}
</style><rect class="j3s9ivbxi"/><path class="vmxf93b4c"/>`,
		"fallback": "arcticons:researchgate",
	});
}

export default Component;
