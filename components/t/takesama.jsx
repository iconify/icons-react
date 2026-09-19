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
		"content": `<style>.gst3f0bff {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.776 19.427c-5.604 0-6.888-4.153-6.888-7.153c0 3-1.284 7.153-6.888 7.153s-6.887-4.153-6.887-7.153c0 3-1.285 7.153-6.888 7.153m6.887 4.364v3.9m13.776-3.9v3.9m-.579 5.167c-3.788 2.411-8.83 2.411-12.619 0");
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
</style><rect class="j3s9ivbxi"/><path class="gst3f0bff"/>`,
		"fallback": "arcticons:takesama",
	});
}

export default Component;
