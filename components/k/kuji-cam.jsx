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

.v4k87ub0n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36 20v8m-4-8v6c0 1.1-.9 2-2 2s-2-.9-2-2v-.7M20 20v5.3c0 1.5 1.2 2.7 2.6 2.7s2.6-1.2 2.6-2.7V20M12 20v8m0-2.8l4.2-5.2m0 8L13 24M5.5 11.9h37m-37 24.2h37");
}
</style><path class="v4k87ub0n"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:kuji-cam",
	});
}

export default Component;
