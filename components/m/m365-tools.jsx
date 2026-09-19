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
		"content": `<style>.atgi03bqv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.075 28.578L32.935 7H24");
}

.bakdjm70b {
  cx: 9px;
  cy: 30.5px;
  r: 3.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.lob53w-yd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.29 23.184L28.974 31.5h-16.62");
}

.pufz_nyzb {
  cx: 39px;
  cy: 30.5px;
  r: 3.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.pw2fqznxu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33 38.722a18 17 0 0 1-18 0");
}
</style><circle class="bakdjm70b"/><path class="pw2fqznxu"/><circle class="pufz_nyzb"/><path class="atgi03bqv"/><path class="lob53w-yd"/>`,
		"fallback": "arcticons:m365-tools",
	});
}

export default Component;
