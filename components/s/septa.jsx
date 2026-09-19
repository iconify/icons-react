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
		"content": `<style>.jc1oydeao {
  width: 39px;
  height: 31px;
  x: 4.5px;
  y: 8.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.srf0gpb6r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.558 8.5h9.903l-8.922 10.333l8.922 10.334h-9.903L9.637 18.833z");
}

.zouhxib_t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.442 18.833h-9.903l8.922 10.334L19.539 39.5h9.903l8.921-10.333z");
}
</style><rect class="jc1oydeao"/><path class="zouhxib_t"/><path class="srf0gpb6r"/>`,
		"fallback": "arcticons:septa",
	});
}

export default Component;
