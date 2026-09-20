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
		"content": `<style>.ntz_8jbkb {
  fill: currentColor;
  d: path("M216 128v80a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h80a8 8 0 0 1 0 16H48v152h152v-80a8 8 0 0 1 16 0m16-68a36 36 0 1 1-36-36a36 36 0 0 1 36 36m-16 0a20 20 0 1 0-20 20a20 20 0 0 0 20-20");
}
</style><path class="ntz_8jbkb"/>`,
		"fallback": "ph:notification",
	});
}

export default Component;
