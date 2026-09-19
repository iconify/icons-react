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
		"content": `<style>.mugaay10b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16 18h16c4 0 8 4 8 7v12c0 1-1 2-2 2M16 18c-4 0-8 4-8 7v12c0 1 1 2 2 2m0 0h28M8 35h6m2 0h24M16 18v-6c0-2.5 2.5-3 4-3m12 9v-6c0-2.5-2.5-3-4-3");
}

.ppy-cnbns {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.25 28.75H18.5v-3.5h3.75V21.5h3.5v3.75h3.75v3.5h-3.75v3.75h-3.5zM20 9h8m1.5 9v-5q0-1.5-1.5-1.5M18.5 16v-3q0-1.5 1.5-1.5m0 0h8");
}
</style><path class="mugaay10b"/><path class="ppy-cnbns"/>`,
		"fallback": "arcticons:medkit",
	});
}

export default Component;
