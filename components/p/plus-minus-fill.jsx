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
		"content": `<style>.p6ksvybnu {
  fill: currentColor;
  d: path("M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M56 96a8 8 0 0 1 8-8h16V72a8 8 0 0 1 16 0v16h16a8 8 0 0 1 0 16H96v16a8 8 0 0 1-16 0v-16H64a8 8 0 0 1-8-8m24 96a8 8 0 0 1-5.66-13.66l96-96a8 8 0 0 1 11.32 11.32l-96 96A8 8 0 0 1 80 192m112-8h-48a8 8 0 0 1 0-16h48a8 8 0 0 1 0 16");
}
</style><path class="p6ksvybnu"/>`,
		"fallback": "ph:plus-minus-fill",
	});
}

export default Component;
