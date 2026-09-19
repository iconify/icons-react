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
		"content": `<style>.y5pws7biv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.448 22.07h29.104M21.18 33.289V28.86a2.82 2.82 0 0 1 5.64 0v7.705m5.329 5.935V32.445a6.404 6.404 0 0 1 6.403-6.404M9.448 30.534v-1.43a3.064 3.064 0 0 1 6.128 0v2.546m17.106-13.214v-7.253L29.54 5.5l-3.143 5.683v7.253");
}
</style><path class="y5pws7biv"/>`,
		"fallback": "arcticons:s-net-mobile",
	});
}

export default Component;
