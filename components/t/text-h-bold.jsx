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
		"content": `<style>.h4fz3wb5m {
  fill: currentColor;
  d: path("M212 56v144a12 12 0 0 1-24 0v-60H68v60a12 12 0 0 1-24 0V56a12 12 0 0 1 24 0v60h120V56a12 12 0 0 1 24 0");
}
</style><path class="h4fz3wb5m"/>`,
		"fallback": "ph:text-h-bold",
	});
}

export default Component;
