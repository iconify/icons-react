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
		"content": `<style>.nmf6sun5p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5 10.359v27.282l15.103-4.384l6.333 8.769L43 37.64V10.36l-16.564 4.385l-6.333-8.77z");
}
</style><path class="nmf6sun5p"/>`,
		"fallback": "arcticons:nbc",
	});
}

export default Component;
