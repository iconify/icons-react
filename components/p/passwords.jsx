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
		"content": `<style>.rg_wy7bnr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.01 27H43.5v-6H17.009");
}

.xyw98ub3z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.5 21v11H36v-1a2 2 0 1 1 4 0v1h3.5v-5");
}

.yqixzln3k {
  cx: 14px;
  cy: 24px;
  r: 9.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.zt5ju8ikv {
  cx: 14px;
  cy: 24px;
  r: 4.25px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="yqixzln3k"/><circle class="zt5ju8ikv"/><path class="rg_wy7bnr"/><path class="xyw98ub3z"/>`,
		"fallback": "arcticons:passwords",
	});
}

export default Component;
