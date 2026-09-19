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
		"content": `<style>.g4bcl7sfw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.67 43.5c4.47-5.72 32.81-4.74 32.81-22.5c0-12.28-9.7-16.5-16.48-16.5S6.52 10.42 6.52 26.42c0 12.43 2.15 17.08 2.15 17.08");
}
</style><path class="g4bcl7sfw"/>`,
		"fallback": "arcticons:storytel",
	});
}

export default Component;
