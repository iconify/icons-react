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
		"content": `<style>.l5gg833kf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 4.5l17.92 9.75v19.5L24 43.5L6.08 33.75v-19.5ZM6.08 14.25L24 24m17.92-9.75L24 24m0 19.5V24");
}
</style><path class="l5gg833kf"/>`,
		"fallback": "arcticons:tentenklooni",
	});
}

export default Component;
