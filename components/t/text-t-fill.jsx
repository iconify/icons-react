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
		"content": `<style>.avyjrac8v {
  fill: currentColor;
  d: path("M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-24 64a8 8 0 0 1-16 0v-8h-32v88h12a8 8 0 0 1 0 16h-40a8 8 0 0 1 0-16h12V88H88v8a8 8 0 0 1-16 0V80a8 8 0 0 1 8-8h96a8 8 0 0 1 8 8Z");
}
</style><path class="avyjrac8v"/>`,
		"fallback": "ph:text-t-fill",
	});
}

export default Component;
