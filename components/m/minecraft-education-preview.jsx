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

.tnh6idbfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 38.25h14.25V9.75H9.75v4.75m9.651 23.75H24v-19m0 0h-4.599V14.5m0 0H9.75v4.75h9.651V24M9.75 24v14.25h9.651V24L9.75 19.25z");
}
</style><path class="tnh6idbfd"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:minecraft-education-preview",
	});
}

export default Component;
