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

.skxpryb-b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.75 18.5v7.013a4.25 4.25 0 0 0 8.5 0V18.5m0 7.012v4.25m-8.5-4.25V35.5");
}
</style><rect class="j3s9ivbxi"/><path class="skxpryb-b"/>`,
		"fallback": "arcticons:mu-launcher",
	});
}

export default Component;
