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
		"content": `<style>.pt8kzdbuw {
  fill: currentColor;
  d: path("M252 56a12 12 0 0 1-12 12h-44v36a12 12 0 0 1-12 12h-44v36a12 12 0 0 1-12 12H84v36a12 12 0 0 1-12 12H16a12 12 0 0 1 0-24h44v-36a12 12 0 0 1 12-12h44v-36a12 12 0 0 1 12-12h44V56a12 12 0 0 1 12-12h56a12 12 0 0 1 12 12");
}
</style><path class="pt8kzdbuw"/>`,
		"fallback": "ph:steps-bold",
	});
}

export default Component;
