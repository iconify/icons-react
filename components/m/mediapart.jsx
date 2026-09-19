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
		"content": `<style>.d9ku91bpu {
  width: 31.2px;
  height: 39px;
  x: 8.4px;
  y: 4.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1.95px;
}

.itqd-x1ra {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.48 9.38h9.2m-9.2 7.32h9.2m-9.2 7.31h9.2m-9.2 7.32h9.2m-9.2 7.31h9.2m4.61-29.26h9.21m-9.21 7.32h9.21m-9.21 7.31h9.21m-9.21 7.32h9.21m-9.21 7.31h9.21");
}
</style><rect class="d9ku91bpu"/><path class="itqd-x1ra"/>`,
		"fallback": "arcticons:mediapart",
	});
}

export default Component;
