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
		"content": `<style>.f0_0dly6x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.862 28.309v-8.618l4.309 8.618l4.309-8.618v8.618m7.719 0l-2.801-8.618l-2.909 8.618m.97-2.908h3.77m3.2 2.909v-8.62h1.4c2.37 0 4.31 1.94 4.31 4.31s-1.94 4.31-4.31 4.31z");
}

.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}
</style><path class="f0_0dly6x"/><path class="i9clfwm2k"/>`,
		"fallback": "arcticons:madbarz",
	});
}

export default Component;
