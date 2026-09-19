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
		"content": `<style>.j3s9ivbxi {
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

.mzq_7zbob {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m10.5 25.327l10.127 5.853L10.5 37.032m22 0H21.673");
}

.o_zwsibem {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.277 10.485v3.83m1.765-2.668a4.44 4.44 0 0 1 2.677 4.076h0a4.443 4.443 0 0 1-4.442 4.443h0a4.443 4.443 0 0 1-4.443-4.443h0a4.44 4.44 0 0 1 2.676-4.076m8.99 4.076a7.223 7.223 0 1 1-14.447 0a7.223 7.223 0 0 1 14.447 0");
}
</style><path class="mzq_7zbob"/><rect class="j3s9ivbxi"/><path class="o_zwsibem"/>`,
		"fallback": "arcticons:termux-boot",
	});
}

export default Component;
