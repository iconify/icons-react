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

.ny_kklbmp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m27 24l2 5.3l4-10.6l4 10.6M11 26a2 2 0 1 1 4 0v3.3M11 24v5.3m4-3.3a2 2 0 1 1 4 0v3.3m2-3.3a2 2 0 1 1 4 0v1.3a2 2 0 1 1-4 0zm12-.94h2.4");
}
</style><rect class="j3s9ivbxi"/><path class="ny_kklbmp"/>`,
		"fallback": "arcticons:mova",
	});
}

export default Component;
