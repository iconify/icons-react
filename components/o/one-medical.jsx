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
		"content": `<style>.adpq6cb8j {
  cx: 24px;
  cy: 10.225px;
  r: 4.725px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.bq421cvpl {
  cx: 24px;
  cy: 24px;
  r: 4.725px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.l2gc43zkj {
  cx: 10.225px;
  cy: 24px;
  r: 4.725px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.p8afxsbko {
  cx: 24px;
  cy: 37.775px;
  r: 4.725px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.w0bsnbbvl {
  cx: 37.775px;
  cy: 24px;
  r: 4.725px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="bq421cvpl"/><circle class="l2gc43zkj"/><circle class="w0bsnbbvl"/><circle class="adpq6cb8j"/><circle class="p8afxsbko"/>`,
		"fallback": "arcticons:one-medical",
	});
}

export default Component;
