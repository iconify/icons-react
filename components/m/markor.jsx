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
		"content": `<style>.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}

.vcz-wmpnb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 13.58h37M15.976 37.26V21.183L24 37.278l8.023-16.071v16.071M10.929 7.673v3.234m6.536-3.234v3.234M24 7.673v3.234m6.536-3.234v3.234m6.536-3.234v3.234");
}
</style><path class="vcz-wmpnb"/><path class="i9clfwm2k"/>`,
		"fallback": "arcticons:markor",
	});
}

export default Component;
