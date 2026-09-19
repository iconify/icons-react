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
		"content": `<style>.ej8lcn6yp {
  cx: 19.5px;
  cy: 28.5px;
  r: 14px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.oqa9v-w7b {
  cx: 37px;
  cy: 11px;
  r: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="ej8lcn6yp"/><circle class="oqa9v-w7b"/>`,
		"fallback": "arcticons:moonpay",
	});
}

export default Component;
