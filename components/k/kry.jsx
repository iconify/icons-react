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

.kg7g4brju {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.5 19.947v5.043a3.057 3.057 0 0 1-6.113 0v-5.043m-5.915 3.057a3.057 3.057 0 0 1 3.056-3.057m-3.056 0v8.1M13.5 15.826v12.227m.001-2.597l5.534-5.507m-3.772 3.754l4.35 4.332");
}

.ztz4g0brl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.5 24.99v4.127a3.057 3.057 0 0 1-3.057 3.056a3.05 3.05 0 0 1-2.16-.895");
}
</style><path class="i9clfwm2k"/><path class="ztz4g0brl"/><path class="kg7g4brju"/>`,
		"fallback": "arcticons:kry",
	});
}

export default Component;
