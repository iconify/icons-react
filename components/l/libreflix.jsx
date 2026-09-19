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
		"content": `<style>.hej5vuiuy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m31.14 25.1l-12.88 8.68a1.26 1.26 0 0 1-2-1V15.26a1.25 1.25 0 0 1 2-1L31.15 23a1.25 1.25 0 0 1-.01 2.1");
}

.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}
</style><path class="hej5vuiuy"/><path class="i9clfwm2k"/>`,
		"fallback": "arcticons:libreflix",
	});
}

export default Component;
