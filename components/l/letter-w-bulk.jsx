import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.k-r9umawa {
  fill: currentColor;
  d: path("m8.064 16.135l2.974-10.41a1.001 1.001 0 0 1 1.924 0l2.974 10.41L19.03 3.757a1 1 0 0 1 1.94.486l-4 16a1 1 0 0 1-1.932.032L12 9.64L8.962 20.275a1.002 1.002 0 0 1-1.932-.032l-4-16a1 1 0 0 1 1.94-.486Z");
}
</style><path class="k-r9umawa"/>`,
		"fallback": "coolicons:letter-w-bulk",
	});
}

export default Component;
