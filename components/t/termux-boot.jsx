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

.kb8pa2bxx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.277 10.485v3.83m1.765-2.668a4.443 4.443 0 0 1-1.766 8.52a4.443 4.443 0 0 1-1.767-8.519m8.991 4.075a7.223 7.223 0 1 1-14.447 0a7.223 7.223 0 0 1 14.447 0");
}

.mzq_7zbob {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m10.5 25.327l10.127 5.853L10.5 37.032m22 0H21.673");
}
</style><path class="mzq_7zbob"/><rect class="j3s9ivbxi"/><path class="kb8pa2bxx"/>`,
		"fallback": "arcticons:termux-boot",
	});
}

export default Component;
