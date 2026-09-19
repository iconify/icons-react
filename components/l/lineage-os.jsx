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
		"content": `<style>.e4xn18b2o {
  cx: 24px;
  cy: 23.212px;
  r: 7.096px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.frofhbb1s {
  cx: 24px;
  cy: 23.212px;
  r: 2.76px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ftgd_cckj {
  cx: 39.769px;
  cy: 27.154px;
  r: 4.731px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ht5gw-7wl {
  cx: 8.231px;
  cy: 27.154px;
  r: 4.731px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.oeohafbqj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m17.109 24.93l-4.289 1.081m22.36 0l-4.289-1.081");
}
</style><circle class="e4xn18b2o"/><circle class="ht5gw-7wl"/><circle class="ftgd_cckj"/><circle class="frofhbb1s"/><path class="oeohafbqj"/>`,
		"fallback": "arcticons:lineage-os",
	});
}

export default Component;
