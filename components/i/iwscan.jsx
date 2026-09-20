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
		"content": `<style>.j3pb8u89c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.333 32.697c0-6.727 5.453-12.18 12.18-12.18m19.594-7.86c1.395 7.908-1.118 15.38-4.467 22.76c-3.156-6.185-4.128-13.677-4.343-22.81c.414 9.155-1.927 16.315-5.815 22.76c-2.751-6.848-5.562-13.666-3.968-22.785M4.5 32.515c0-11.009 8.924-19.933 19.932-19.933");
}

.kndro1obx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.816 31.13a3.876 3.876 0 1 1-.906-2.559");
}
</style><path class="j3pb8u89c"/><path class="kndro1obx"/>`,
		"fallback": "arcticons:iwscan",
	});
}

export default Component;
