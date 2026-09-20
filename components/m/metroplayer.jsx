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
		"content": `<style>.jplb9pb4e {
  cx: 8.16px;
  cy: 38.57px;
  r: 3.65px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.rle2f1bnd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.85 5.78a3.64 3.64 0 0 0-3.2 1.91L24 30.91L11.37 7.69a3.66 3.66 0 0 0-6.43 3.5L20.79 40.3a3.63 3.63 0 0 0 6.41 0l9-16.49v14.76a3.66 3.66 0 0 0 7.31 0V9.43a3.65 3.65 0 0 0-3.66-3.65");
}
</style><circle class="jplb9pb4e"/><path class="rle2f1bnd"/>`,
		"fallback": "arcticons:metroplayer",
	});
}

export default Component;
