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
		"content": `<style>.aa5u97boi {
  cx: 15.677px;
  cy: 24.84px;
  r: 4.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.fx8fplq3k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 12.5v23h11.177m22.234-23v23H43.5m0-13.675h-8.383M24.853 35.5v-23h5.589m-.001 9.325h-5.589");
}
</style><circle class="aa5u97boi"/><path class="fx8fplq3k"/>`,
		"fallback": "arcticons:loft",
	});
}

export default Component;
