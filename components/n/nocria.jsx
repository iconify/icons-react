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
		"content": `<style>.rz-vvzbbj {
  width: 39px;
  height: 14px;
  x: 4.5px;
  y: 17px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 3px;
  ry: 3px;
}

.v8g8mjb4p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.5 31v-4h-31v4");
}
</style><rect class="rz-vvzbbj"/><path class="v8g8mjb4p"/>`,
		"fallback": "arcticons:nocria",
	});
}

export default Component;
