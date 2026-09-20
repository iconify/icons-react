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
		"content": `<style>.m4-b97b6u {
  fill: currentColor;
  d: path("M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m8-136h-32a6 6 0 0 0-6 6v80a6 6 0 0 0 12 0v-18h26a34 34 0 0 0 0-68m0 56h-26V94h26a22 22 0 0 1 0 44");
}
</style><path class="m4-b97b6u"/>`,
		"fallback": "ph:letter-circle-p-light",
	});
}

export default Component;
