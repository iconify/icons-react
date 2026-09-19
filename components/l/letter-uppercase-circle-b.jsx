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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.vleul92af {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.3 24a4 4 0 0 1 0 8h-6.6V16h6.6a4 4 0 0 1 0 8m0 0h-6.6");
}
</style><circle class="cpk0fnbgt"/><path class="vleul92af"/>`,
		"fallback": "arcticons:letter-uppercase-circle-b",
	});
}

export default Component;
