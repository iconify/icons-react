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
		"content": `<style>.w9dnp2biv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4m-23.75 0v37M24 5.5v37m9.25-37v37m9.25-27.75h-37m37 9.25h-37m37 9.25h-37m4.625-18.5V5.5M5.5 10.125h9.25M28.625 24v-9.25M24 19.375h9.25M19.375 42.5v-9.25m-4.625 4.625H24M37.875 24v-9.25m-4.625 4.625h9.25");
}
</style><path class="w9dnp2biv"/>`,
		"fallback": "arcticons:pixelator",
	});
}

export default Component;
