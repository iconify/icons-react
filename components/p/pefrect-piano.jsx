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

.sio4jhbkp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 13.439h2.552v16.249h3.268V13.439h2.474v16.249h3.268V13.439h8.277v16.249h3.268V13.439h2.29v16.249h3.268V13.439h2.291v16.249h3.268V13.439H42.5M9.686 29.688V42.5m5.742-12.812V42.5m5.681-29.061V42.21m5.864-12.522V42.5m5.558-12.812V42.5m5.559-12.812V42.5");
}
</style><path class="i9clfwm2k"/><path class="sio4jhbkp"/>`,
		"fallback": "arcticons:pefrect-piano",
	});
}

export default Component;
