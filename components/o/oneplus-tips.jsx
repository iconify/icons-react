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
		"content": `<style>.dkhgrab-g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.81 34.162H8.79a3.29 3.29 0 0 1-3.29-3.29V9.055a3.29 3.29 0 0 1 3.29-3.29h20.73a3.29 3.29 0 0 1 3.29 3.29z");
}

.qyif1_lty {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.807 13.828h6.4a3.297 3.297 0 0 1 3.293 3.293v21.821a3.297 3.297 0 0 1-3.293 3.293H18.484a3.29 3.29 0 0 1-3.293-3.293v-4.781m-3.14-21.723h12.218m-12.218 4.143h6.109");
}
</style><path class="dkhgrab-g"/><path class="qyif1_lty"/>`,
		"fallback": "arcticons:oneplus-tips",
	});
}

export default Component;
