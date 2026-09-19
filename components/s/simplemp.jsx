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

.mju6jgajo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14 33.44V14.37c0-1.48 1.41-1.58 2.22-1.11l17.34 10.09c.27.15.85.7 0 1.2L16.22 34.64c-1.15.67-2.22.44-2.22-1.2");
}
</style><path class="i9clfwm2k"/><path class="mju6jgajo"/>`,
		"fallback": "arcticons:simplemp",
	});
}

export default Component;
