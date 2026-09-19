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

.k9jzv39yy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.899 29V19h3.274c1.85 0 3.35 1.504 3.35 3.358s-1.5 3.359-3.35 3.359h-3.274M11.718 29V19l6.625 10V19m11.512 8.904c.614.799 1.382 1.096 2.452 1.096h1.48a2.495 2.495 0 0 0 2.495-2.495v-.01A2.495 2.495 0 0 0 33.788 24h-1.633a2.497 2.497 0 0 1-2.498-2.497h0A2.503 2.503 0 0 1 32.16 19h1.473c1.07 0 1.838.297 2.451 1.096");
}
</style><path class="k9jzv39yy"/><path class="i9clfwm2k"/>`,
		"fallback": "arcticons:nps",
	});
}

export default Component;
