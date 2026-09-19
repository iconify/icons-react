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

.tyapftiwl {
  cx: 24px;
  cy: 24px;
  r: 10.75px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.yxnr5dbrd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.25 24H7.875c0-8.906 7.22-16.125 16.125-16.125S40.125 15.095 40.125 24H34.75");
}
</style><circle class="cpk0fnbgt"/><path class="yxnr5dbrd"/><circle class="tyapftiwl"/>`,
		"fallback": "arcticons:tobank",
	});
}

export default Component;
