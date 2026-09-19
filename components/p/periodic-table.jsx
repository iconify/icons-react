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
		"content": `<style>.g_n1nb34x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.15 16.994v14.131a2.375 2.375 0 0 0 2.375 2.375h.712m-5.581-12.587h4.988M13.763 33.5v-19h6.22c3.516 0 6.367 2.857 6.367 6.38s-2.85 6.382-6.367 6.382h-6.22");
}

.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}
</style><path class="g_n1nb34x"/><path class="i9clfwm2k"/>`,
		"fallback": "arcticons:periodic-table",
	});
}

export default Component;
