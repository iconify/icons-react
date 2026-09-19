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
		"content": `<style>.c_yez0brk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.416 20.316v4.624c0 1.49 1.176 2.822 2.822 2.822h0c1.489 0 2.821-1.176 2.821-2.822v-4.624m0 4.546v2.822m2.273-4.546c0-1.49 1.176-2.822 2.822-2.822h0c1.49 0 2.822 1.176 2.822 2.822v1.802c0 1.49-1.176 2.822-2.822 2.822h0c-1.49 0-2.822-1.176-2.822-2.822m0 2.744V16.476M9.5 24.862c0 1.49 1.176 2.822 2.822 2.822h0c1.489 0 2.821-1.176 2.821-2.822V23.06c0-1.49-1.176-2.822-2.821-2.822h0c-1.49 0-2.822 1.176-2.822 2.822m0-2.744v11.208M32.935 24H38.5m-2.822-2.822v5.565");
}

.j3s9ivbxi {
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
</style><path class="c_yez0brk"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:pub",
	});
}

export default Component;
