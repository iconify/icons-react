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
		"content": `<style>.j3s9ivbxi {
  width: 37px;
  height: 37px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.rtth1-b6g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.493 18.909H42.5V29.09H25.493m13.304-8.035l-1.903 5.893l-1.9-5.889M31.1 26.944v-5.888m-1.899 0h3.802M5.5 18.909h19.971V29.09H5.5zm7.612 8.04l1.899-5.893l1.899 5.888m-.629-1.95h-2.54m7.077-3.938a1.925 1.925 0 0 1 1.9 1.95v1.988a1.924 1.924 0 0 1-1.9 1.95A1.924 1.924 0 0 1 18.915 25v-1.993a1.924 1.924 0 0 1 1.899-1.95zm-12.573 0v5.888h2.866");
}
</style><path class="rtth1-b6g"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:laotv",
	});
}

export default Component;
