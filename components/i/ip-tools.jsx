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

.u2dyg1byx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.566 12.5v23m7.631 0v-23h7.475c4.312 0 7.762 3.45 7.762 7.762s-3.45 7.763-7.762 7.763h-7.475");
}
</style><path class="u2dyg1byx"/><path class="i9clfwm2k"/>`,
		"fallback": "arcticons:ip-tools",
	});
}

export default Component;
