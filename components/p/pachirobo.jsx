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
		"content": `<style>.h5e8bdbua {
  cx: 32.5px;
  cy: 24px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 7.5px;
  ry: 11px;
}

.h848m3r5t {
  cx: 28px;
  cy: 24px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 3px;
  ry: 4.5px;
}

.pc0z3dvhh {
  cx: 15.5px;
  cy: 24px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 7.5px;
  ry: 11px;
}

.qzqzuxi0c {
  cx: 20px;
  cy: 24px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 3px;
  ry: 4.5px;
}

.z38ul-b4j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 11h39v26h-39z");
}
</style><path class="z38ul-b4j"/><ellipse class="pc0z3dvhh"/><ellipse class="h5e8bdbua"/><ellipse class="qzqzuxi0c"/><ellipse class="h848m3r5t"/>`,
		"fallback": "arcticons:pachirobo",
	});
}

export default Component;
