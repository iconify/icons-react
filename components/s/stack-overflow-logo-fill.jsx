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
		"content": `<style>.pcncazbai {
  fill: currentColor;
  d: path("M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-73.14 14.86a8 8 0 0 1 11.32 0l45.25 45.26a8 8 0 0 1-11.31 11.31l-45.26-45.25a8 8 0 0 1 0-11.32m-34.68 51.91a8 8 0 0 1 10.45-4.33l59.13 24.49a8 8 0 0 1-3.06 15.4a7.9 7.9 0 0 1-3.06-.62l-59.13-24.49a8 8 0 0 1-4.33-10.45M96 152h64a8 8 0 0 1 0 16H96a8 8 0 0 1 0-16m104 40a8 8 0 0 1-8 8H64a8 8 0 0 1-8-8v-48a8 8 0 0 1 16 0v40h112v-40a8 8 0 0 1 16 0Z");
}
</style><path class="pcncazbai"/>`,
		"fallback": "ph:stack-overflow-logo-fill",
	});
}

export default Component;
