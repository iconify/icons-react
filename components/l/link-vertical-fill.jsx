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
		"content": `<style>.i8dfhgbvx {
  fill: currentColor;
  d: path("M7 9V7a5 5 0 0 1 10 0v2a1 1 0 0 1-2 0V7a3 3 0 1 0-6 0v2a1 1 0 0 1-2 0m6-1v8a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0m-4 7v2a3 3 0 1 0 6 0v-2a1 1 0 0 1 2 0v2a5 5 0 0 1-10 0v-2a1 1 0 0 1 2 0");
}
</style><path class="i8dfhgbvx"/>`,
		"fallback": "coolicons:link-vertical-fill",
	});
}

export default Component;
