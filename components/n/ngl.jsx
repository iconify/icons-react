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
		"content": `<style>.ku331_pmx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.389 18.5v11h5.5m-25.778 0v-11l7.287 11v-11m10.208 3.644a3.644 3.644 0 0 0-7.287 0v3.712a3.644 3.644 0 0 0 7.287 0h-3.644");
}

.uo47pyvli {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.5 42.5h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4");
}
</style><path class="uo47pyvli"/><path class="ku331_pmx"/>`,
		"fallback": "arcticons:ngl",
	});
}

export default Component;
