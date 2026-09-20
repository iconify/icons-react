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

.v-qvq_42g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.093 18v8.025a3.975 3.975 0 0 0 7.95 0V18m10.864 0l-3.975 12l-3.975-12m14.95 9a3 3 0 1 1-6 0v-1.95a3 3 0 1 1 6 0m0 4.95v-7.95");
}
</style><rect class="j3s9ivbxi"/><path class="v-qvq_42g"/>`,
		"fallback": "arcticons:uva",
	});
}

export default Component;
