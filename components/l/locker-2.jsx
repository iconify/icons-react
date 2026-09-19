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
		"content": `<style>.h9t7uuebx {
  cx: 9.962px;
  cy: 24px;
  r: 4.956px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.zm6zq-i4f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.918 24h13.536m-2.772 2.349V24m-6.605 2.5v13.542a3.46 3.46 0 0 0 3.458 3.458h17a3.46 3.46 0 0 0 3.459-3.458V7.958A3.46 3.46 0 0 0 39.535 4.5h-17a3.46 3.46 0 0 0-3.458 3.458V21.5m-.001-12.005h23.918m-23.918 29.01h23.918");
}
</style><circle class="h9t7uuebx"/><path class="zm6zq-i4f"/>`,
		"fallback": "arcticons:locker-2",
	});
}

export default Component;
