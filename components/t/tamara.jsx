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
		"content": `<style>.b2h8kshwq {
  cx: 32.75px;
  cy: 24px;
  r: 7px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.tc1j-wbqs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.489 22.188A7 7 0 0 1 15.251 17a7 7 0 0 1 6.761 5.188a7 7 0 0 1-3.261 7.874z");
}
</style><circle class="cpk0fnbgt"/><circle class="b2h8kshwq"/><path class="tc1j-wbqs"/>`,
		"fallback": "arcticons:tamara",
	});
}

export default Component;
