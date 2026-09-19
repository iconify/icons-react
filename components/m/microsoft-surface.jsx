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

.zfkjpoe8g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.5 16.758h5v5h-5zm0 2.5h5m-2.5-2.5v5M5.5 33.517a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4m-37-4.826a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4");
}
</style><path class="i9clfwm2k"/><path class="zfkjpoe8g"/>`,
		"fallback": "arcticons:microsoft-surface",
	});
}

export default Component;
