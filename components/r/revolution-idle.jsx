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

.idr87-bme {
  cx: 24px;
  cy: 24px;
  r: 10.701px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.umjb4nb7p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 18.625A5.375 5.375 0 1 1 18.625 24H24z");
}

.yc1n9lb2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 7.9A16.101 16.101 0 1 1 7.9 24");
}
</style><circle class="cpk0fnbgt"/><path class="yc1n9lb2k"/><path class="umjb4nb7p"/><circle class="idr87-bme"/>`,
		"fallback": "arcticons:revolution-idle",
	});
}

export default Component;
