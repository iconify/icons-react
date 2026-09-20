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
		"content": `<style>.amgdpowrb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22 22.705v-8l5.3 8v-8m1.775 18.59v-8l5.3 8v-8m-20.75-10.59v5.35a2.65 2.65 0 1 0 5.3 0v-5.35m11.45 4h2.608m1.392 4h-4v-8h4m-20.75 14.59h2.6m-2.6 4v-8h4m5.725 0za2.65 2.65 0 0 1 2.65 2.65v2.7a2.65 2.65 0 1 1-5.3 0v-2.7a2.65 2.65 0 0 1 2.65-2.65");
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
</style><rect class="j3s9ivbxi"/><path class="amgdpowrb"/>`,
		"fallback": "arcticons:mi-unefon",
	});
}

export default Component;
