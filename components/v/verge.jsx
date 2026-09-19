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
		"content": `<style>.h7hz3njkb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m5.6 4.5l18.4 39l18.4-39");
}

.nxrnambri {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 21.41L31.98 4.5H16.02z");
}
</style><path class="h7hz3njkb"/><path class="nxrnambri"/>`,
		"fallback": "arcticons:verge",
	});
}

export default Component;
