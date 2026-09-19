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

.xioay0b-b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.5 27.919v-7.76h2.508c1.41 0 2.587 1.176 2.587 2.587s-1.176 2.586-2.587 2.586H9.5m2.508 0l2.587 2.587m9.797-7.524l-7.211 7.21m3.606.314a2.81 2.81 0 0 1-2.822-2.822v-2.116a2.81 2.81 0 0 1 2.822-2.822h0a2.81 2.81 0 0 1 2.821 2.822v2.116a2.81 2.81 0 0 1-2.822 2.822M34.581 24h2.587m1.332 3.919h-3.919v-7.838H38.5m-11.522 7.838v-7.76h1.725c1.88 0 3.37 1.49 3.37 3.37v.941c0 1.881-1.49 3.37-3.37 3.37h-1.725z");
}
</style><path class="xioay0b-b"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:rode-central",
	});
}

export default Component;
