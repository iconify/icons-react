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
		"content": `<style>.bkceqtbdy {
  cx: 29.218px;
  cy: 29.218px;
  r: 13.282px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.h37j58_oy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.115 34.294a3.96 3.96 0 0 0 3.32 1.494h1.993a3.32 3.32 0 0 0 0-6.641h-2.159a3.32 3.32 0 1 1 0-6.641h1.993A3.57 3.57 0 0 1 33.582 24m-4.317-3.32v16.602m-12.77-12.59a4.47 4.47 0 0 1-1.413-3.277v-4.317a4.464 4.464 0 0 1 4.483-4.482a4.67 4.67 0 0 1 3.487 1.66M13.09 17.43h5.645m-5.645 3.32h5.645");
}

.z7x4e4b8o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.02 31.774a13.282 13.282 0 1 1 15.754-15.753");
}
</style><circle class="bkceqtbdy"/><path class="h37j58_oy"/><path class="z7x4e4b8o"/>`,
		"fallback": "arcticons:priceconverter",
	});
}

export default Component;
