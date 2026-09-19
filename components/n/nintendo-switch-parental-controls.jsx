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
		"content": `<style>.a7eaznjap {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.686 38.963V43.5");
}

.av3ts8h2f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.195 24.476h5.403v-6.659H6.402v6.659h10.217v17.122h12.679m2.54-12.804v-.105");
}

.entjr41wd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 36.842v4.756m-.225-12.805v3.585h5.528V43.5h6.973V32.378h5.322v-3.585z");
}

.hj-poobba {
  cx: 24px;
  cy: 11.159px;
  r: 6.659px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.pvbvmjb0s {
  cx: 32.686px;
  cy: 25.207px;
  r: 3.585px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.upwo8tbbx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.838 28.794v-.105");
}
</style><path class="av3ts8h2f"/><circle class="hj-poobba"/><path class="upwo8tbbx"/><circle class="hj-poobba"/><path class="entjr41wd"/><circle class="pvbvmjb0s"/><path class="a7eaznjap"/>`,
		"fallback": "arcticons:nintendo-switch-parental-controls",
	});
}

export default Component;
