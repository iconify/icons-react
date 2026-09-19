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
		"content": `<style>.fx2ifgb6b {
  width: 20.86px;
  height: 32.16px;
  x: 7.643px;
  y: 10.34px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.m3_fe7bgy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.5 37.66h7.857a4 4 0 0 0 4-4V9.5a4 4 0 0 0-4-4H23.496a4 4 0 0 0-4 4v.841");
}
</style><rect class="fx2ifgb6b"/><path class="m3_fe7bgy"/>`,
		"fallback": "arcticons:mobile-cloner",
	});
}

export default Component;
