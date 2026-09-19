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
		"content": `<style>.qcule0x1t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 14.931c0 4.251-8.73 7.697-19.5 7.697S4.5 19.182 4.5 14.931S13.23 7.234 24 7.234s19.5 3.446 19.5 7.697m0 9.069c0 4.25-8.73 7.696-19.5 7.696S4.5 28.25 4.5 24m39 9.069c0 4.25-8.73 7.697-19.5 7.697S4.5 37.32 4.5 33.069m0 0v-9.07m39 9.07v-9.07m0 .001v-9.07M4.5 24v-9.07");
}
</style><path class="qcule0x1t"/>`,
		"fallback": "arcticons:lidraughts",
	});
}

export default Component;
