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
		"content": `<style>.kwkgxokqv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 5.5V24l18.5 18.5v-37zm0 37V24L5.5 42.5z");
}
</style><path class="kwkgxokqv"/>`,
		"fallback": "arcticons:monochromatic",
	});
}

export default Component;
