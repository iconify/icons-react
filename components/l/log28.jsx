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
		"content": `<style>.g7mz4bc9x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29 35.5H11m26 6.954v-4.74h-2.234c-1.117 0-2.016-.9-2.016-2.016v-.538c0-1.117.9-2.016 2.016-2.016H37v-6.68h-2.484c-1.117 0-2.016-.9-2.016-2.016v-.538c0-1.117.9-2.016 2.016-2.016H37v-6.93h-2.484c-1.117 0-2.016-.9-2.016-2.016v-.538c0-1.116.9-2.015 2.016-2.015H37V5.54M29 24.5H11m13-11H11");
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
</style><path class="g7mz4bc9x"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:log28",
	});
}

export default Component;
