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
		"content": `<style>.hkmfaqohc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.015 33.445v8.2L42.5 26.742V6.355L24 15.657L5.5 6.355v20.387l31.485 14.903v-8.2m-12.92-2.947V19.373");
}
</style><path class="hkmfaqohc"/>`,
		"fallback": "arcticons:quranic",
	});
}

export default Component;
