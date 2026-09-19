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
		"content": `<style>.h7-xtubpa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.837 15.163C35.1 17.424 36.5 20.547 36.5 24s-1.401 6.576-3.663 8.837h0L15.163 15.162h0C12.9 17.424 11.5 20.546 11.5 24s1.401 6.576 3.663 8.837");
}

.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}
</style><path class="h7-xtubpa"/><path class="i9clfwm2k"/>`,
		"fallback": "arcticons:nova-icon-pack",
	});
}

export default Component;
