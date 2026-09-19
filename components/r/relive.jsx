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
		"content": `<style>.vhsi8sbkh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.432 30.507c5.622-1.527 9.757-6.667 9.757-12.773c0-7.309-5.925-13.234-13.234-13.234s-13.234 5.925-13.234 13.234");
}

.wwryanbdu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.284 43.5L23.048 19.94L8.811 43.5");
}
</style><path class="wwryanbdu"/><path class="vhsi8sbkh"/>`,
		"fallback": "arcticons:relive",
	});
}

export default Component;
