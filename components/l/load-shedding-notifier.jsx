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

.nlj-wnpbn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m27.49 32.009l4.43 3.225l-4.43 3.216");
}

.sw6-uxb4b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.346 24.404L34.476 9.5L26.82 22.392l4.429 1.204L13.525 38.5l7.654-12.892zm11.144 7.605h11.68v6.441H27.49zm4.43 3.225h7.002");
}
</style><path class="sw6-uxb4b"/><path class="nlj-wnpbn"/><path class="i9clfwm2k"/>`,
		"fallback": "arcticons:load-shedding-notifier",
	});
}

export default Component;
