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

.mhkjk18hb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.635 26.193L13.365 38.5V13.886zm-15.11-12.702l11.274 6.526m-15.272-7.781L20.469 9.5l7.562 4.186");
}
</style><path class="mhkjk18hb"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:onleihe-3",
	});
}

export default Component;
