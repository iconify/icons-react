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

.r4d3somod {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m18.955 5.5l5.046 5.727L29.045 5.5m0 18.5h5.046L23.999 35.091L13.91 24h5.045v-6.727L23.999 24l5.046-6.727z");
}
</style><rect class="j3s9ivbxi"/><path class="r4d3somod"/>`,
		"fallback": "arcticons:open-note",
	});
}

export default Component;
