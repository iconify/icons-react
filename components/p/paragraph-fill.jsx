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
		"content": `<style>.z8rar1fhy {
  fill: currentColor;
  d: path("M216 48a8 8 0 0 1-8 8h-16v152a8 8 0 0 1-16 0V56h-24v152a8 8 0 0 1-16 0v-40H96a64 64 0 0 1 0-128h112a8 8 0 0 1 8 8");
}
</style><path class="z8rar1fhy"/>`,
		"fallback": "ph:paragraph-fill",
	});
}

export default Component;
