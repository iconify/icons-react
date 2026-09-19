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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.qlcof6kfj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.646 15.875h-6.708m24.125 0h-6.708m-14.063 0L24 36.125l8.709-20.25");
}
</style><circle class="cpk0fnbgt"/><path class="qlcof6kfj"/>`,
		"fallback": "arcticons:v-coloring",
	});
}

export default Component;
