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
		"content": `<style>.x9y7xpb5t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.5 33.25a13.875 13.875 0 0 1 0-27.75zm3-18.5c7.663 0 13.875 6.212 13.875 13.875S33.163 42.5 25.5 42.5z");
}
</style><path class="x9y7xpb5t"/>`,
		"fallback": "arcticons:sudachi",
	});
}

export default Component;
