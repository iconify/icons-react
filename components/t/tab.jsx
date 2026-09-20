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
		"content": `<style>.h-evtwb-e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.018 24.925h8.33m-13.683.802l5.89-5.89m3.628 17.659V24.925m9.753 9.428a3.143 3.143 0 0 1-6.287 0V32.31a3.143 3.143 0 0 1 6.287 0m0 5.186v-8.328m3.277 3.143a3.143 3.143 0 0 1 6.287 0v2.043a3.143 3.143 0 0 1-6.287 0m0 3.142V24.925");
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
</style><rect class="j3s9ivbxi"/><path class="h-evtwb-e"/>`,
		"fallback": "arcticons:tab",
	});
}

export default Component;
