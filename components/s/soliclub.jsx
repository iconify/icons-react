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

.km6g-ib1b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 36.333l18.5-18.5M11.667 24L24 11.667M5.5 17.833L30.167 42.5m-12.334-37l18.5 18.5");
}
</style><rect class="j3s9ivbxi"/><path class="km6g-ib1b"/>`,
		"fallback": "arcticons:soliclub",
	});
}

export default Component;
