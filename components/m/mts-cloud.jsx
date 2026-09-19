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

.s7utubc2u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12 32.093h19.954c2.242 0 4.046-1.805 4.046-4.046S34.196 24 31.954 24h-4.046A8.092 8.092 0 0 0 12 21.907");
}
</style><rect class="j3s9ivbxi"/><path class="s7utubc2u"/>`,
		"fallback": "arcticons:mts-cloud",
	});
}

export default Component;
