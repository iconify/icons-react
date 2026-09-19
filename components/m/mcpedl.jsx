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

.qekhthb2y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.5 32.364V15.636h3.764a7.32 7.32 0 0 1 7.318 7.319v2.09a7.32 7.32 0 0 1-7.318 7.319zm14.636-16.728v16.728H35.5");
}
</style><path class="i9clfwm2k"/><path class="qekhthb2y"/>`,
		"fallback": "arcticons:mcpedl",
	});
}

export default Component;
