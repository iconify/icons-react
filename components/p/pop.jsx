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

.kdt9creaw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.529 23.968a2.95 2.95 0 1 0 5.898 0V22.05a2.949 2.949 0 1 0-5.898 0m0-2.948v11.796m8.536-8.847a2.95 2.95 0 1 1 5.898 0v1.917a2.95 2.95 0 1 1-5.898 0zm8.508 1.917a2.95 2.95 0 1 0 5.898 0V22.05a2.949 2.949 0 1 0-5.898 0m0-2.948v11.796");
}
</style><rect class="j3s9ivbxi"/><path class="kdt9creaw"/>`,
		"fallback": "arcticons:pop",
	});
}

export default Component;
