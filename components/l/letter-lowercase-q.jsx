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

.l1zjvop8k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28 22.6a4 4 0 0 1-4 4h0a4 4 0 0 1-4-4V20a4 4 0 0 1 4-4h0a4 4 0 0 1 4 4m0-4v16");
}
</style><rect class="j3s9ivbxi"/><path class="l1zjvop8k"/>`,
		"fallback": "arcticons:letter-lowercase-q",
	});
}

export default Component;
