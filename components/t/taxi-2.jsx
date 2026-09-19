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
		"content": `<style>.au2mw1bob {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.272 29.885v4.41a4 4 0 0 1-4 4H10.728a4 4 0 0 1-4-4v-4.41");
}

.e2k29fb5v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.272 34.09v4.41a4 4 0 0 1-4 4H10.728a4 4 0 0 1-4-4v-4.41m10.316-20.249h13.912M24 25.749V13.841");
}

.rj3kbl4qf {
  width: 34.544px;
  height: 28.59px;
  x: 6.728px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}
</style><rect class="rj3kbl4qf"/><path class="au2mw1bob"/><path class="e2k29fb5v"/>`,
		"fallback": "arcticons:taxi-2",
	});
}

export default Component;
