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
		"content": `<style>.k630vlb6p {
  fill: currentColor;
  d: path("M224 176a8 8 0 0 1-8 8h-80v56a8 8 0 0 1-16 0v-56H40a8 8 0 0 1 0-16h9.29L70.46 48H64a8 8 0 0 1 0-16h128a8 8 0 0 1 0 16h-6.46l21.17 120H216a8 8 0 0 1 8 8");
}
</style><path class="k630vlb6p"/>`,
		"fallback": "ph:push-pin-simple-fill",
	});
}

export default Component;
