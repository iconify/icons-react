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
		"content": `<style>.p9zmp2bcv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.611 5.5v27.13c0 5.45 4.42 9.87 9.87 9.87s9.87-4.42 9.87-9.87v-6.066m3.144-18.812l-30.99 9.76");
}
</style><path class="p9zmp2bcv"/>`,
		"fallback": "arcticons:time-internet",
	});
}

export default Component;
