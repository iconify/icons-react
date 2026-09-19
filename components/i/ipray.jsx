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
		"content": `<style>.jfqe5f42i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.234 39.645L24 42.5v-37l18.234 5.481zM24 11.781l18.233 5.139M24 16.806l18.233 4.225M5.766 39.645L24 42.5v-37L5.766 10.981zM24 11.781L5.766 16.92M24 16.806L5.766 21.031");
}
</style><path class="jfqe5f42i"/>`,
		"fallback": "arcticons:ipray",
	});
}

export default Component;
