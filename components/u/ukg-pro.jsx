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
		"content": `<style>.nx3yvjb-i {
  cx: 36.85px;
  cy: 9.42px;
  r: 3.92px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.uiv1wqbtf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 42.5c-9.25 0-16.77-7.52-16.77-16.77v-4.02c0-2.14 1.74-3.88 3.88-3.88s3.88 1.74 3.88 3.88v4.02c0 4.96 4.04 9 9 9s9-4.04 9-9v-4.02c0-2.14 1.74-3.88 3.88-3.88s3.88 1.74 3.88 3.88v4.02c0 9.24-7.52 16.77-16.77 16.77z");
}

.x3feybboc {
  cx: 11.15px;
  cy: 9.42px;
  r: 3.92px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="x3feybboc"/><circle class="nx3yvjb-i"/><path class="uiv1wqbtf"/>`,
		"fallback": "arcticons:ukg-pro",
	});
}

export default Component;
