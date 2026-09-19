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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ehohp_jyn {
  cx: 15.5px;
  cy: 25.1px;
  r: 4.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.h3t58obry {
  cx: 16.2px;
  cy: 23.5px;
  r: 1.2px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.lqq9s6bwi {
  cx: 33.1px;
  cy: 19.2px;
  r: 1.2px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.w6qqo5b_k {
  cx: 32.6px;
  cy: 21px;
  r: 4.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="cpk0fnbgt"/><circle class="ehohp_jyn"/><circle class="w6qqo5b_k"/><circle class="lqq9s6bwi"/><circle class="h3t58obry"/>`,
		"fallback": "arcticons:mpp",
	});
}

export default Component;
