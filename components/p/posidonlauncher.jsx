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
		"content": `<style>.rane0i_8f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31 8.13V22a7 7 0 0 1-4 6.27V4.5h-6v23.81A7 7 0 0 1 17 22V8.13l-6 3.24V22a13 13 0 0 0 10 12.64v8.86h6v-8.87A13 13 0 0 0 37 22V11.37Z");
}
</style><path class="rane0i_8f"/>`,
		"fallback": "arcticons:posidonlauncher",
	});
}

export default Component;
