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
		"content": `<style>.qhbhvmqla {
  fill: currentColor;
  d: path("M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m32 132a4 4 0 0 1-4 4h-56a4 4 0 0 1-4-4v-56a4 4 0 0 1 4-4h56a4 4 0 0 1 4 4Z");
}
</style><path class="qhbhvmqla"/>`,
		"fallback": "ph:stop-circle-fill",
	});
}

export default Component;
