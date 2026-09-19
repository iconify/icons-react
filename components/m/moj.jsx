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

.linh049ut {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.661 28.818v-7.863h7.206v-7.181h7.839m3.955 4.868V30.68c0 2.097-1.984 1.984-1.984 1.984H18.652z");
}
</style><path class="linh049ut"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:moj",
	});
}

export default Component;
