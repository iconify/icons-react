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
		"content": `<style>.c2mxvoa5c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M45.447 22.5H38.92a5.5 5.5 0 0 0 0 11h4.37M29.5 3.211V13a5.5 5.5 0 1 1-11 0V3.212");
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

.euyie8vxe {
  cx: 24px;
  cy: 28px;
  r: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="cpk0fnbgt"/><circle class="euyie8vxe"/><path class="c2mxvoa5c"/>`,
		"fallback": "arcticons:nothing-launcher",
	});
}

export default Component;
