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
		"content": `<style>.g2wj9jbhp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.5 5.5h29c2.216 0 4 1.784 4 4v29c0 2.216-1.784 4-4 4h-29c-2.216 0-4-1.784-4-4v-29c0-2.216 1.784-4 4-4");
}

.ls4pgyr_w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.704 15.772v11.863a3.954 3.954 0 1 1-7.909 0v-1.313m19.676-5.434l-3.954 10.48l-3.955-10.48M31.303 5.5v7.197a4 4 0 0 0 4 4H42.5");
}
</style><path class="g2wj9jbhp"/><path class="ls4pgyr_w"/>`,
		"fallback": "arcticons:jvdroid",
	});
}

export default Component;
