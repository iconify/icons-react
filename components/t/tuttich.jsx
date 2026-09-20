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
		"content": `<style>.h_kxyib4a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.738 4.667a4.216 4.216 0 0 0-5.22 2.881L4.666 31.263a4.216 4.216 0 0 0 2.882 5.22l23.714 6.852a4.216 4.216 0 0 0 5.22-2.882l6.85-23.714a4.216 4.216 0 0 0-2.88-5.22h-.001z");
}

.wat6mjbfv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.62 38.868a5.27 5.27 0 0 1-8.997-3.726v-18.52m0 6.324H24");
}
</style><path class="h_kxyib4a"/><path class="wat6mjbfv"/>`,
		"fallback": "arcticons:tuttich",
	});
}

export default Component;
