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
		"content": `<style>.e__u04y0p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 5.5h23v11h-23zm14 26h23v11h-23zm12-26h11v23h-11zm-26 14h11v23h-11z");
}
</style><path class="e__u04y0p"/>`,
		"fallback": "arcticons:squarehome2",
	});
}

export default Component;
