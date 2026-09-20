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
		"content": `<style>.q0vmbubqv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.72 11.681C27.401 9.736 24.895 8.84 19.273 8.84h-2.855M8.825 39.658c2.319 1.944 4.825 2.842 10.448 2.842h2.854");
}

.tdnpssb8x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.418 8.839a8.403 8.403 0 0 0-8.366 8.415a8.403 8.403 0 0 0 8.366 8.415h2.855m0 .001h2.854a8.403 8.403 0 0 1 8.366 8.415a8.403 8.403 0 0 1-8.39 8.415");
}

.ux5xnzb2o {
  cx: 36.857px;
  cy: 8.591px;
  r: 3.091px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="tdnpssb8x"/><path class="q0vmbubqv"/><circle class="ux5xnzb2o"/>`,
		"fallback": "arcticons:sbanken",
	});
}

export default Component;
