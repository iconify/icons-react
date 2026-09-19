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
		"content": `<style>.hhfqqhbaq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.701 36.15V22.51m0-4.999V11.85h8.144c4.996 0 7.247 4.05 7.754 5.632m.012 5.028c-.525 1.683-2.832 5.662-7.766 5.662H16.7");
}

.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}

.o8nzkubqz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.964 17.511h24.073v4.999H11.964zm18.389 0v5");
}
</style><path class="hhfqqhbaq"/><path class="o8nzkubqz"/><path class="i9clfwm2k"/>`,
		"fallback": "arcticons:progress-bars",
	});
}

export default Component;
