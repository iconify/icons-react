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
		"content": `<style>.kwhzuubbu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.443 11.944c8.592-8.592 22.522-8.592 31.113 0q0 0 0 0m-21.213 9.899a8 8 0 0 1 11.314 0h0M26 27.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0");
}

.s8eajpbrl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.99 20a15 15 0 0 1-22.633 18.99A15 15 0 0 1 11.01 20m2.383-3.107c5.858-5.858 15.355-5.858 21.213 0");
}
</style><path class="s8eajpbrl"/><path class="kwhzuubbu"/>`,
		"fallback": "arcticons:openwrt",
	});
}

export default Component;
