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
		"content": `<style>.uwrwqjb7k {
  fill: currentColor;
  d: path("M128 40a96 96 0 1 0 96 96a96.11 96.11 0 0 0-96-96m45.66 61.66l-40 40a8 8 0 0 1-11.32-11.32l40-40a8 8 0 0 1 11.32 11.32M96 16a8 8 0 0 1 8-8h48a8 8 0 0 1 0 16h-48a8 8 0 0 1-8-8");
}
</style><path class="uwrwqjb7k"/>`,
		"fallback": "ph:timer-fill",
	});
}

export default Component;
