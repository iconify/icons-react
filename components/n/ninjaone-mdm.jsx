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
		"content": `<style>.fz9zenx4m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.5 31.874V16.143m11.872 15.731V22.08a5.94 5.94 0 0 0-5.935-5.936A5.937 5.937 0 0 0 14.5 22.08m15.072-3.815l3.928-2.139v15.711");
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
</style><path class="fz9zenx4m"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:ninjaone-mdm",
	});
}

export default Component;
