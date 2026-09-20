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
		"content": `<style>.c77k87h0m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.5 26.933v-5.866h1.907c1.1 0 1.98.88 1.98 1.98s-.88 1.98-1.98 1.98H9.5m5.469 1.906v-5.866h1.906c1.1 0 1.98.88 1.98 1.98s-.88 1.98-1.98 1.98H14.97m1.977-.002l1.835 1.835m11.073-5.793h3.813m-1.907 5.866v-5.866m-7.091 5.206c.367.44.807.66 1.467.66h.88a1.47 1.47 0 0 0 1.467-1.466A1.47 1.47 0 0 0 27.017 24h-.953a1.47 1.47 0 0 1-1.467-1.466c0-.807.66-1.467 1.467-1.467h.88c.66 0 1.1.147 1.467.66M20.504 24h1.907m1.026 2.933h-2.933v-5.866h2.933m13.083 5.866zc-1.1 0-1.907-.88-1.907-1.906v-1.98c0-1.1.88-1.98 1.907-1.98c1.1 0 1.98.88 1.98 1.98v1.906c0 1.1-.88 1.98-1.98 1.98");
}

.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}
</style><path class="i9clfwm2k"/><path class="c77k87h0m"/>`,
		"fallback": "arcticons:presto",
	});
}

export default Component;
