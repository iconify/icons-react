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
		"content": `<style>.d5egpl5-d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.335 25.56a2.67 2.67 0 0 0 0 5.34m13.66 0a2.67 2.67 0 0 0 0-5.34");
}

.o707_xbjc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.4 6.5v35a2 2 0 0 0 2 2h2.33v-39H10.4a2 2 0 0 0-2 2m4.33-2v39H37.6a2 2 0 0 0 2-2v-35a2 2 0 0 0-2-2Z");
}

.u9x9tbbpv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.335 30.9v-6.971a6.83 6.83 0 1 1 13.66 0V30.9");
}
</style><path class="o707_xbjc"/><path class="u9x9tbbpv"/><path class="d5egpl5-d"/>`,
		"fallback": "arcticons:spooks",
	});
}

export default Component;
