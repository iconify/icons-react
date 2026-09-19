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
		"content": `<style>.fxev6v04x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.454 42.5h5.341v-6.15h5.142v-6.19h5.501V23.7H42.5V11.67h-5.062V5.5H26.796v6.17h-5.342V5.5H10.821v6.17H5.5V23.7h5.331v6.47h5.322v6.19h5.291z");
}
</style><path class="fxev6v04x"/>`,
		"fallback": "arcticons:pixilart",
	});
}

export default Component;
