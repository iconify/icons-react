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
		"content": `<style>.g_ijb_b9l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.68 19.85a1.65 1.65 0 1 0-2.34 0a1.66 1.66 0 0 0 2.34 0");
}

.p0xlkp_sm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.46 13.83L17.65 9a2.09 2.09 0 0 0-2.95 0l-9.59 9.61a2.09 2.09 0 0 0 0 2.95l6.36 6.36L30.36 9a2.09 2.09 0 0 1 3 0l9.58 9.58a2.09 2.09 0 0 1 0 2.95L25.48 39a2.11 2.11 0 0 1-3 0l-8.79-8.79");
}
</style><path class="g_ijb_b9l"/><path class="p0xlkp_sm"/>`,
		"fallback": "arcticons:stocard",
	});
}

export default Component;
