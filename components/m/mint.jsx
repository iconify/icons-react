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
		"content": `<style>.ee4-kmbyt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.069 20.642v6.695m10.789-8.779v7.516c0 .697.565 1.263 1.263 1.263h.379m-2.968-6.695h2.652m-4.147 6.695v-4.168a2.526 2.526 0 0 0-2.527-2.527h0a2.526 2.526 0 0 0-2.526 2.527m0 4.168v-6.695");
}

.ezfyt9btu {
  cx: 24.069px;
  cy: 17.547px;
  r: 0.75px;
  fill: currentColor;
}

.j3s9ivbxi {
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

.o5n3a2btv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.5 23.168a2.526 2.526 0 0 1 2.526-2.526h0a2.526 2.526 0 0 1 2.527 2.526v4.169M11.5 20.642v6.695");
}

.p5kjerteb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.553 23.168a2.526 2.526 0 0 1 2.526-2.526h0a2.526 2.526 0 0 1 2.527 2.526v4.169");
}
</style><rect class="j3s9ivbxi"/><path class="o5n3a2btv"/><path class="p5kjerteb"/><circle class="ezfyt9btu"/><path class="ee4-kmbyt"/>`,
		"fallback": "arcticons:mint",
	});
}

export default Component;
