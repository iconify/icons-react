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

.vleul92af {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.3 24a4 4 0 0 1 0 8h-6.6V16h6.6a4 4 0 0 1 0 8m0 0h-6.6");
}
</style><rect class="j3s9ivbxi"/><path class="vleul92af"/>`,
		"fallback": "arcticons:letter-uppercase-square-b",
	});
}

export default Component;
