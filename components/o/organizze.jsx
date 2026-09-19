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

.v-95uo1dg {
  cx: 24px;
  cy: 24px;
  r: 10.745px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.zah-ybcmb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 34.745V45.5m0-43v10.755M2.5 24h10.755");
}
</style><circle class="cpk0fnbgt"/><circle class="v-95uo1dg"/><path class="zah-ybcmb"/>`,
		"fallback": "arcticons:organizze",
	});
}

export default Component;
