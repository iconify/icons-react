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
		"content": `<style>.r970cnbpb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m30.16 26.388l-8.217 8.035l7.483 7.651H42.5v-3.069zM5.5 5.926h10.883v36.148H5.5zm25.682.001L19.275 17.569V32.79L42.5 10.08V5.927z");
}
</style><path class="r970cnbpb"/>`,
		"fallback": "arcticons:kompact",
	});
}

export default Component;
