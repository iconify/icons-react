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
		"content": `<style>.jc1oydeao {
  width: 39px;
  height: 31px;
  x: 4.5px;
  y: 8.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.sui5n8dwm {
  width: 33px;
  height: 25.2px;
  x: 7.5px;
  y: 11.4px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2px;
  ry: 2px;
}

.tqtr-vhew {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m7.5 26l2-10l.5 14l2-8l3 3l2-10l.5 14.5l2-6.5l3 2l1-3l.8 9l1.2-2");
}

.w1e8qzbrn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.5 15.9h14V29h-12v-3H31v-4h-7.5zM18 32v1.5m7.5-1.5v1.5h-15V32M31 26h6.5M31 22v-6.1");
}
</style><rect class="jc1oydeao"/><rect class="sui5n8dwm"/><path class="tqtr-vhew"/><path class="w1e8qzbrn"/>`,
		"fallback": "arcticons:robot36",
	});
}

export default Component;
