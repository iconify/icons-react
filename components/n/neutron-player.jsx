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
		"content": `<style>.xak-ucxea {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m29.667 24l-11.334-6.5v13z");
}

.xiu-zs_4m {
  width: 39px;
  height: 26px;
  x: 4.386px;
  y: 10.876px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 5px;
  ry: 5px;
}
</style><path class="xak-ucxea"/><rect class="xiu-zs_4m"/>`,
		"fallback": "arcticons:neutron-player",
	});
}

export default Component;
