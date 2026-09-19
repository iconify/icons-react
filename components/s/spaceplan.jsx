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
		"content": `<style>.pm55nub4z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 5.5h6.158v6.158H5.5zm10.164 11.863l1.699-1.699");
}

.vdgw_si7l {
  cx: 25.745px;
  cy: 25.745px;
  r: 16.755px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="vdgw_si7l"/><path class="pm55nub4z"/>`,
		"fallback": "arcticons:spaceplan",
	});
}

export default Component;
