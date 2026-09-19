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
		"content": `<style>.bubl3jbyf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.77 31.51h5.06m29.4.01H29.32M18.96 14.6h6.26");
}

.eke5iebnr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.6 11.2a1.77 1.77 0 0 0-1.77 1.8v26.56a1.67 1.67 0 0 0 1.67 1.67h14.18a1.66 1.66 0 0 0 1.64-1.65V12.89a1.67 1.67 0 0 0-1.67-1.67Z");
}

.iaxkgf5ko {
  cx: 16.83px;
  cy: 14.6px;
  r: 0.73px;
  fill: currentColor;
}

.o3w7cmowk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.32 34H41.8c.94 0 1.7-.56 1.7-1.25v-1.23h-2.27v-23a1.69 1.69 0 0 0-1.69-1.69H8.47a1.69 1.69 0 0 0-1.7 1.68h0v23H4.5v1.25c0 .69.75 1.25 1.7 1.25h5.63");
}
</style><path class="o3w7cmowk"/><path class="eke5iebnr"/><circle class="iaxkgf5ko"/><path class="bubl3jbyf"/>`,
		"fallback": "arcticons:microsoft-yourphone",
	});
}

export default Component;
