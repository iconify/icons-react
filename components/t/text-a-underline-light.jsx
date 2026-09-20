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
		"content": `<style>.jbqj-obgz {
  fill: currentColor;
  d: path("M61.45 173.43a6 6 0 0 0 8-2.88L86.63 134h82.74l17.2 36.55A6 6 0 0 0 192 174a5.9 5.9 0 0 0 2.55-.57a6 6 0 0 0 2.88-8l-64-136a6 6 0 0 0-10.86 0l-64 136a6 6 0 0 0 2.88 8M128 46.09L163.72 122H92.28ZM222 216a6 6 0 0 1-6 6H40a6 6 0 0 1 0-12h176a6 6 0 0 1 6 6");
}
</style><path class="jbqj-obgz"/>`,
		"fallback": "ph:text-a-underline-light",
	});
}

export default Component;
