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
		"content": `<style>.clbsi56li {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.47 25.87h3.1a3.11 3.11 0 0 0 3.1-2.82l1.08-11.56a4.58 4.58 0 0 0-2.31-4.41l-.1-.08");
}

.gkgmxyejw {
  cx: 35.02px;
  cy: 22.81px;
  r: 4.81px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.q2k9mvbzs {
  cx: 18.5px;
  cy: 6.44px;
  r: 1.94px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.r0ic7tgjc {
  cx: 12.44px;
  cy: 6.44px;
  r: 1.94px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.zbdsahbsq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.47 24.73v9a9.8 9.8 0 0 0 19.6 0v-6.11m-19.6-1.75h-3.1a3.11 3.11 0 0 1-3.09-2.82L8.19 11.49a4.59 4.59 0 0 1 2.31-4.41l.1-.08");
}
</style><circle class="gkgmxyejw"/><path class="zbdsahbsq"/><circle class="r0ic7tgjc"/><path class="clbsi56li"/><circle class="q2k9mvbzs"/>`,
		"fallback": "arcticons:sulamericasaude",
	});
}

export default Component;
