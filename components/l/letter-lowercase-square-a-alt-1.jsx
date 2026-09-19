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
		"content": `<style>.bvlsgvtzk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.923 19.75c.988-.965 1.681-1.05 3.59-1.05c2.167 0 3.59.929 3.59 3.44v7.16m-.007-4c0 2.21-1.823 4-4.072 4h-1.43c-1.49 0-2.697-1.186-2.697-2.65S21.105 24 22.595 24h5.508");
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
</style><rect class="c j3s9ivbxi"/><path class="bvlsgvtzk r"/>`,
		"fallback": "arcticons:letter-lowercase-square-a-alt-1",
	});
}

export default Component;
