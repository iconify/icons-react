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
		"content": `<style>.i83rhljcn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.804 12.936v3.039h5.741v19.089h-27.09V15.975h5.741v-3.039zm-5.582 17.743v4.385m-4.444-4.385v4.385m-4.437-4.385v4.385m13.342-4.385v4.385");
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
</style><path class="i83rhljcn"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:portknocker",
	});
}

export default Component;
