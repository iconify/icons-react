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
		"content": `<style>.g_5s4obhe {
  width: 8px;
  height: 17px;
  x: 31.5px;
  y: 15.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1px;
  ry: 1px;
}

.tou0ftluy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.5 24h5m-28 0h15m-28 0h5");
}

.yqgtvbctm {
  width: 8px;
  height: 17px;
  x: 8.5px;
  y: 15.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1px;
  ry: 1px;
}
</style><path class="tou0ftluy"/><rect class="yqgtvbctm"/><rect class="g_5s4obhe"/>`,
		"fallback": "arcticons:strong",
	});
}

export default Component;
