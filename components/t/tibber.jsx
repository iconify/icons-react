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
		"content": `<style>.k45ad7h6u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 30.324L22.419 43.5l15.284-22.662h-17.92");
}

.n45nkj8_b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 17.676L25.581 4.5L10.297 27.162h17.92");
}
</style><path class="n45nkj8_b"/><path class="k45ad7h6u"/>`,
		"fallback": "arcticons:tibber",
	});
}

export default Component;
