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
		"content": `<style>.jig_ebbme {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m22.599 39.919l14.557.092M4.5 7.989h25.091v7.884H43.5v19.5H16.257V25.051H4.5z");
}

.wqkyzob-g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.753 19.47h20.286v12.533H19.753z");
}
</style><path class="jig_ebbme"/><path class="wqkyzob-g"/>`,
		"fallback": "arcticons:ninjaone-rmm",
	});
}

export default Component;
