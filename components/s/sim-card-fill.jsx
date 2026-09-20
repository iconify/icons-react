import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.m6uj59rll {
  fill: currentColor;
  d: path("m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M184 192a8 8 0 0 1-8 8h-16a4 4 0 0 1-4-4v-35.73a8.17 8.17 0 0 0-7.47-8.25a8 8 0 0 0-8.53 8v36a4 4 0 0 1-4 4h-16a4 4 0 0 1-4-4v-35.75a8.17 8.17 0 0 0-7.47-8.25a8 8 0 0 0-8.53 8v36a4 4 0 0 1-4 4H80a8 8 0 0 1-8-8V136a8 8 0 0 1 8-8h96a8 8 0 0 1 8 8Z");
}
</style><path class="m6uj59rll"/>`,
		"fallback": "ph:sim-card-fill",
	});
}

export default Component;
