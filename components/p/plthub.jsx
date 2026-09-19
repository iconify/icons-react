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
		"content": `<style>.nlw9m-37a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 15.91V3.5m0 41V32.09m3.37-11.46L38.5 9.5m-29 29l11.13-11.13M32.09 24H44.5m-41 0h12.41m13.81 5.72l8.78 8.78m-29-29l8.78 8.78");
}

.vy9e2ob_w {
  cx: 24px;
  cy: 24px;
  r: 4.76px;
  fill: none;
  stroke: currentColor;
}
</style><path class="nlw9m-37a"/><circle class="vy9e2ob_w"/>`,
		"fallback": "arcticons:plthub",
	});
}

export default Component;
