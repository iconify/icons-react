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
		"content": `<style>.ffiu-bb_a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.054 36.446H16.946a12.446 12.446 0 0 1 0-24.892h14.108a12.446 12.446 0 1 1 0 24.892m-14.108-16.46a4.013 4.013 0 1 0 0 8.027h14.108a4.013 4.013 0 1 0 0-8.026Z");
}
</style><path class="ffiu-bb_a"/>`,
		"fallback": "arcticons:oculus",
	});
}

export default Component;
