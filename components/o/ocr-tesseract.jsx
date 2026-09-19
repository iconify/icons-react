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
		"content": `<style>.mfzs_8bxz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.66 22.059h32.68a3.16 3.16 0 0 1 3.16 3.16v10.2a3.16 3.16 0 0 1-3.16 3.16H7.66a3.16 3.16 0 0 1-3.16-3.16v-10.2a3.16 3.16 0 0 1 3.16-3.16m32.66.004L5.37 9.421");
}

.yfeg5jo_l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.236 28.144h22.338v4.35H17.236zm-8.899 0h4.343v4.35H8.337z");
}
</style><path class="mfzs_8bxz"/><path class="yfeg5jo_l"/>`,
		"fallback": "arcticons:ocr-tesseract",
	});
}

export default Component;
