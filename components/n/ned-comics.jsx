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
		"content": `<style>.bnr_grbjn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m11.137 31.006l5.513-2.568l2.544 5.462l-5.512 2.569zM8.657 24l-3.003 4.22M17.994 24l6.007 12.816m0 1.003l-9.594 4.597m-8.904-9.612l4.505 9.611M6.7 29.303l6.145 13.112m15.232-2.928V27.476h3.527c3.787 0 6.857 2.352 6.857 5.255v1.501c0 2.902-3.07 5.255-6.857 5.255zm9.11-18.54h-7.836V8.936h7.836m-7.836 6.004h5.109M9.453 20.947V8.936l10.383 12.01V8.937M42.5 24h-37M24 42.417V5.583m-6.238 18.419L6.699 29.303l-1.101.529");
}

.j3s9ivbxi {
  width: 37px;
  height: 37px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}
</style><path class="bnr_grbjn"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:ned-comics",
	});
}

export default Component;
