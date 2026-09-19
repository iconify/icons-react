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

.nfz43mb7q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.099 10.5L20.11 33.356c-.5 2.289.951 4.144 3.24 4.144c0 0 1.084.097 1.748-.28m-5.45-21.685h8.704");
}
</style><path class="nfz43mb7q"/><path class="i9clfwm2k"/>`,
		"fallback": "arcticons:tinytinyrss",
	});
}

export default Component;
