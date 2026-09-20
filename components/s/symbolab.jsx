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

.ny7_w0q_b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36 25.38v5.732a4.246 4.246 0 0 1-4.246 4.246a4.23 4.23 0 0 1-3.003-1.243");
}

.q7oe8j-iv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36 18.374v7.006a4.246 4.246 0 0 1-8.492 0v-7.006m-15.172 9.391c1.042 1.356 2.348 1.861 4.165 1.861h2.514a4.24 4.24 0 0 0 4.237-4.246a4.24 4.24 0 0 0-4.237-4.246h-2.778A4.24 4.24 0 0 1 12 16.888a4.24 4.24 0 0 1 4.237-4.247h2.514c1.817 0 3.123.505 4.165 1.861");
}
</style><path class="i9clfwm2k"/><path class="ny7_w0q_b"/><path class="q7oe8j-iv"/>`,
		"fallback": "arcticons:symbolab",
	});
}

export default Component;
