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

.udhx4fbxb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 38.68h-5.064V26.592h-9.282l-7.049 15.903M37.432 5.647L31.01 20.145h6.425V5.651m-7.66-.151l-16.395 37");
}
</style><path class="udhx4fbxb"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:pocket-mal",
	});
}

export default Component;
