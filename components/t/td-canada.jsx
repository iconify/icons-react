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

.p8vhbqbcr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.5 16h12.4m-7.2 16V16m7.199 0h3.6c3.8 0 7 3.2 7 7v2c0 3.8-3.2 7-7 7h-6.1V18.5");
}
</style><path class="p8vhbqbcr"/><path class="i9clfwm2k"/>`,
		"fallback": "arcticons:td-canada",
	});
}

export default Component;
