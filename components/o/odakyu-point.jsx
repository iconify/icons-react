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
		"content": `<style>.jzq4jbb0k {
  cx: 32.25px;
  cy: 21.75px;
  r: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.m0oz50b9z {
  cx: 15.75px;
  cy: 21.75px;
  r: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.p-s1oo8jq {
  cx: 32.25px;
  cy: 21.75px;
  r: 2.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.snzpp5fsa {
  width: 39px;
  height: 26px;
  x: 4.5px;
  y: 11px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 6px;
  ry: 6px;
}

.vzrh_3bmi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.75 21.75v12");
}
</style><rect class="snzpp5fsa"/><circle class="m0oz50b9z"/><circle class="jzq4jbb0k"/><circle class="p-s1oo8jq"/><path class="vzrh_3bmi"/>`,
		"fallback": "arcticons:odakyu-point",
	});
}

export default Component;
