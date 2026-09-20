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
		"content": `<style>.fv0ol4biz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13 22.974a3.16 3.16 0 0 1 3.159-3.159m-3.159 0v8.37m21.586-1.594a3.158 3.158 0 0 1-5.903-1.565v-2.052a3.158 3.158 0 1 1 6.317 0V24h-6.317m-3.024 4.185v-5.211a3.158 3.158 0 1 0-6.317 0v5.211m0-5.211v-3.159");
}

.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}
</style><path class="i9clfwm2k"/><path class="fv0ol4biz"/>`,
		"fallback": "arcticons:rne",
	});
}

export default Component;
