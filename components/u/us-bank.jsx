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
		"content": `<style>.e7_j6rw0k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 29.175L24 40.646L5.5 29.175V7.354h37z");
}
</style><path class="e7_j6rw0k"/>`,
		"fallback": "arcticons:us-bank",
	});
}

export default Component;
