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
		"content": `<style>.ifu-ee78w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.08 29.15a46 46 0 0 0-7.65 3.9");
}

.t5tc23yzt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.63 25L18.24 4.64a.48.48 0 0 0-.82.31l-.24 3.4a19 19 0 0 1-.95 4.65L9.77 31.92h0a8.56 8.56 0 1 0 14.3-2.78L30.26 27a19 19 0 0 1 4.67-.95l3.39-.24a.48.48 0 0 0 .31-.81M17.78 37.26a2.32 2.32 0 1 1 2.33-2.32a2.32 2.32 0 0 1-2.33 2.32");
}
</style><path class="t5tc23yzt"/><path class="ifu-ee78w"/>`,
		"fallback": "arcticons:phonograph",
	});
}

export default Component;
