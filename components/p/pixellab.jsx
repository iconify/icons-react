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
		"content": `<style>.a8_d1ekuf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.46 43.5v-39m7.74 39v-39m0 23.4h7.64a11.7 11.7 0 0 0 0-23.4H10.46");
}
</style><path class="a8_d1ekuf"/>`,
		"fallback": "arcticons:pixellab",
	});
}

export default Component;
