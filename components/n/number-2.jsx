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

.t427qb46c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.7 21.3a5.305 5.305 0 0 1 6.352-5.199c2.223.427 3.997 2.35 4.219 4.602c.164 1.676-.366 3.329-1.523 4.345C25.604 26.929 18.7 32 18.7 32h10.6");
}
</style><rect class="j3s9ivbxi"/><path class="t427qb46c"/>`,
		"fallback": "arcticons:number-2",
	});
}

export default Component;
