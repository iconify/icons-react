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

.o7ja43mnz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.772 26.732c.437.564.972.768 1.72.768h1.04a1.749 1.749 0 1 0 0-3.5h-1.147a1.75 1.75 0 1 1 0-3.5h1.031c.749 0 1.293.204 1.72.768m1.793-.768h4.638m-2.324 7v-7m9.177 7v-7h2.294a2.353 2.353 0 0 1 0 4.706H27.41m2.304 0l2.294 2.294m-7.225-2.324h-3.092m-.778 2.324l2.324-7l2.314 7m8.176-7h4.638l-4.638 7h4.638");
}
</style><path class="i9clfwm2k"/><path class="o7ja43mnz"/>`,
		"fallback": "arcticons:starz",
	});
}

export default Component;
