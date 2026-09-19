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
		"content": `<style>.bgi61ybss {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.529 23.968a2.95 2.95 0 0 0 2.949 2.949h0a2.95 2.95 0 0 0 2.949-2.95v-1.916a2.95 2.95 0 0 0-2.95-2.95h0a2.95 2.95 0 0 0-2.948 2.95m0-2.949v11.796m8.536-8.847a2.95 2.95 0 1 1 5.898 0v1.917a2.95 2.95 0 1 1-5.898 0zm8.508 1.917a2.95 2.95 0 0 0 2.95 2.949h0a2.95 2.95 0 0 0 2.948-2.95v-1.916a2.95 2.95 0 0 0-2.949-2.95h0a2.95 2.95 0 0 0-2.949 2.95m0-2.949v11.796");
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
</style><rect class="j3s9ivbxi"/><path class="bgi61ybss"/>`,
		"fallback": "arcticons:pop",
	});
}

export default Component;
