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

.wlc-wxa0b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.3 26.635v.065a5.3 5.3 0 0 1-10.6 0v-5.4a5.3 5.3 0 0 1 10.6 0v.065");
}
</style><rect class="j3s9ivbxi"/><path class="wlc-wxa0b"/>`,
		"fallback": "arcticons:letter-uppercase-c",
	});
}

export default Component;
