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

.j_kla10op {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21 10c-7 5-5 11 3 14s10 9 3 14m1.527-28C35 14 33 19 30 20m-12 8c-3 1-5 6 1 10");
}
</style><circle class="cpk0fnbgt"/><path class="j_kla10op"/>`,
		"fallback": "arcticons:sugar-cosmetics",
	});
}

export default Component;
