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
		"content": `<style>.s79xpcu8h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.884 19.617L18.947 39.5h16.13L13.15 8.5h19.633c5.707 0 10.334 4.626 10.334 10.333S38.49 29.166 32.784 29.166h-5.016");
}
</style><path class="s79xpcu8h"/>`,
		"fallback": "arcticons:uprock-earning",
	});
}

export default Component;
