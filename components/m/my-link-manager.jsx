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
		"content": `<style>.ee7asubho {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.757 12.082v25.544a4 4 0 0 0 4 4h25.544m3.307-32.851h-9.081v15.749l4.541-2.811l4.54 2.811z");
}

.ha89l6blz {
  width: 30.766px;
  height: 30.766px;
  x: 11.991px;
  y: 4.626px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}
</style><rect class="ha89l6blz"/><path class="ee7asubho"/>`,
		"fallback": "arcticons:my-link-manager",
	});
}

export default Component;
