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

.ripc0ccuc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.5 17.742v8.37c0 2.29 1.793 4.146 4.01 4.146c2.215 0 4.012-1.856 4.012-4.146v-8.37m10.978 0l-8.018 12.516m0-12.516L33.5 30.258");
}
</style><path class="ripc0ccuc"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:ux-led",
	});
}

export default Component;
