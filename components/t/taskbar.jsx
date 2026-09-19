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
		"content": `<style>.m9uuspfhx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.02 34.8h5.32V15.93h-5.32M13 38.18H7.09a2.6 2.6 0 0 1-2.59-2.59V12.41a2.6 2.6 0 0 1 2.59-2.59H13");
}

.r1k-2peiz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35 38.18h5.95a2.6 2.6 0 0 0 2.59-2.59V12.41a2.6 2.6 0 0 0-2.59-2.59H35");
}

.u2dm1bccj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.98 34.8H7.66V15.93h5.32m2.65-3.39h16.75v24.21H15.63z");
}

.xfbdh-btd {
  width: 22.05px;
  height: 32.42px;
  x: 12.98px;
  y: 7.79px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2px;
}
</style><rect class="xfbdh-btd"/><path class="r1k-2peiz"/><path class="m9uuspfhx"/><path class="u2dm1bccj"/>`,
		"fallback": "arcticons:taskbar",
	});
}

export default Component;
