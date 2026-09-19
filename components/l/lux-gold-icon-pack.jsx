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
		"content": `<style>.a1teb_b_y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.5 5.5a5 5 0 0 1 5 5v27a5 5 0 0 1-5 5h0a5 5 0 0 1-5-5v-27a5 5 0 0 1 5-5m8.5 32v-27c0-2.77 2.23-5 5-5s5 2.23 5 5v22h8.5c2.77 0 5 2.23 5 5s-2.23 5-5 5H24c-2.77 0-5-2.23-5-5");
}

.s96ag5l8q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.5 5.5a5 5 0 0 1 5 5V24a5 5 0 0 1-5 5h0a5 5 0 0 1-5-5V10.5a5 5 0 0 1 5-5");
}
</style><path class="a1teb_b_y"/><path class="s96ag5l8q"/>`,
		"fallback": "arcticons:lux-gold-icon-pack",
	});
}

export default Component;
