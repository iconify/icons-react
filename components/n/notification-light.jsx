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
		"content": `<style>.fm942bc-k {
  fill: currentColor;
  d: path("M214 128v80a14 14 0 0 1-14 14H48a14 14 0 0 1-14-14V56a14 14 0 0 1 14-14h80a6 6 0 0 1 0 12H48a2 2 0 0 0-2 2v152a2 2 0 0 0 2 2h152a2 2 0 0 0 2-2v-80a6 6 0 0 1 12 0m16-68a34 34 0 1 1-34-34a34 34 0 0 1 34 34m-12 0a22 22 0 1 0-22 22a22 22 0 0 0 22-22");
}
</style><path class="fm942bc-k"/>`,
		"fallback": "ph:notification-light",
	});
}

export default Component;
