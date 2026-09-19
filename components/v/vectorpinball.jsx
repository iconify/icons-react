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

.unu61ibdy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m5.5 25.24l11.674-4.689m3.268 15.058L42.5 26.752m-14.718-15.65a2.51 2.51 0 1 1 .002 5.019a2.51 2.51 0 0 1-.003-5.019z");
}
</style><path class="unu61ibdy"/><path class="i9clfwm2k"/>`,
		"fallback": "arcticons:vectorpinball",
	});
}

export default Component;
