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

.jhgd45kxd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.5 28.061V22.83a3.171 3.171 0 0 1 6.342 0v5.232m0-5.232a3.171 3.171 0 1 1 6.342 0v5.231m1.974-3.171a3.171 3.171 0 0 0 6.342 0v-2.06a3.171 3.171 0 1 0-6.342 0m0-.001v9.513");
}
</style><path class="jhgd45kxd"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:moorepay",
	});
}

export default Component;
