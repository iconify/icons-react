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
		"content": `<style>.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}

.rugqdtbcn {
  cx: 24px;
  cy: 34.124px;
  r: 4.376px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.v-8d5sbct {
  cx: 34.124px;
  cy: 24px;
  r: 4.376px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.vbbmd2jha {
  cx: 24px;
  cy: 13.876px;
  r: 4.376px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.yuu_v2kzu {
  cx: 13.876px;
  cy: 24px;
  r: 4.376px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="i9clfwm2k"/><circle class="vbbmd2jha"/><circle class="v-8d5sbct"/><circle class="rugqdtbcn"/><circle class="yuu_v2kzu"/>`,
		"fallback": "arcticons:snes9x",
	});
}

export default Component;
