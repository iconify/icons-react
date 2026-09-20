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
		"content": `<style>.ekr5sxvjl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37 24.889v3.297a2.44 2.44 0 0 1-2.442 2.442a2.44 2.44 0 0 1-1.728-.715");
}

.i-26mc76y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37 20.858v4.03a2.442 2.442 0 1 1-4.885 0v-4.03m-13.964 6.473v-4.03a2.442 2.442 0 1 1 4.885 0v4.03m6.71-1.233a2.442 2.442 0 0 1-4.565-1.21v-1.587a2.442 2.442 0 1 1 4.885 0v.794h-4.885M11 23.3a2.442 2.442 0 1 1 4.885 0v1.588a2.442 2.442 0 1 1-4.885 0z");
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
</style><rect class="j3s9ivbxi"/><path class="ekr5sxvjl"/><path class="i-26mc76y"/>`,
		"fallback": "arcticons:oney",
	});
}

export default Component;
