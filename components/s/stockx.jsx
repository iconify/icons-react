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
		"content": `<style>.hgqn3mblu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.599 39.44L42.5 8.168M27.255 26.821L42.5 39.831M20.17 20.775L5.5 8.257");
}
</style><path class="hgqn3mblu"/>`,
		"fallback": "arcticons:stockx",
	});
}

export default Component;
