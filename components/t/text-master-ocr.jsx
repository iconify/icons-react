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

.l2l-9bbzc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.373 17.298h8.879m-4.439 13.404V17.298m14.814 4.59l-6.653 8.814m6.653 0l-6.653-8.814");
}
</style><path class="l2l-9bbzc"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:text-master-ocr",
	});
}

export default Component;
