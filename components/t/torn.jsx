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

.mmb5z63je {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.312 28v-8h2.619c1.48 0 2.681 1.203 2.681 2.687s-1.2 2.686-2.681 2.686h-2.619m2.62.001l2.62 2.624M9.464 20h5.3m-2.65 8v-8m21.122 8v-8l5.3 8v-8m-18.502 8a2.65 2.65 0 0 1-2.65-2.65v-2.7a2.65 2.65 0 1 1 5.3 0v2.7a2.65 2.65 0 0 1-2.65 2.65");
}
</style><path class="mmb5z63je"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:torn",
	});
}

export default Component;
