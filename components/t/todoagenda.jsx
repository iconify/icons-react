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

.ko6wrac0y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.5 14.06h3.66v3.66H9.5zm3.66 16.517H9.5v-3.66h3.66zM9.5 33.728h3.66v3.66H9.5zm0-23.116h29m-22.193 5.279H38.5M16.307 28.747H38.5M16.307 35.54H38.5m0-11.813h-29");
}
</style><path class="ko6wrac0y"/><path class="i9clfwm2k"/>`,
		"fallback": "arcticons:todoagenda",
	});
}

export default Component;
