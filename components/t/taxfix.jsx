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
		"content": `<style>.b_su2obet {
  cx: 36.5px;
  cy: 31.5px;
  r: 7px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.fqai4-bkp {
  cx: 11.5px;
  cy: 16.5px;
  r: 7px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.kfuyhebpv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.5 38.5h13l22-29h-13z");
}
</style><path class="kfuyhebpv"/><circle class="fqai4-bkp"/><circle class="b_su2obet"/>`,
		"fallback": "arcticons:taxfix",
	});
}

export default Component;
