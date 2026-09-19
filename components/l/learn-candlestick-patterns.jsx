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

.nkp8nmbvy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.683 29.762h7.7a1 1 0 0 1 1 1V42.5h-9.7V30.762a1 1 0 0 1 1-1m3.85 0v-8.979m11.148 4.601h7.7a1 1 0 0 1 1 1V42.5h-9.7V26.384a1 1 0 0 1 1-1m3.85 0V18.4");
}
</style><rect class="j3s9ivbxi"/><path class="nkp8nmbvy"/>`,
		"fallback": "arcticons:learn-candlestick-patterns",
	});
}

export default Component;
