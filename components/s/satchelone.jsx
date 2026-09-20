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
		"content": `<style>.hucoucbqx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.396 28.5v-5.604a3.396 3.396 0 1 0-6.792 0m0 5.604v-9m15.536 7.286a3.396 3.396 0 0 1-6.347-1.682v-2.208a3.396 3.396 0 1 1 6.792 0V24h-6.793");
}

.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}

.zocld9z-m {
  width: 6.793px;
  height: 9px;
  x: 11.415px;
  y: 19.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 3.396px;
  ry: 3.396px;
}
</style><path class="i9clfwm2k"/><rect class="zocld9z-m"/><path class="hucoucbqx"/>`,
		"fallback": "arcticons:satchelone",
	});
}

export default Component;
