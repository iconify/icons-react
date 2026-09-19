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
		"content": `<style>.b5rt0nq8m {
  fill: currentColor;
  d: path("m21.71 11.29l-9-9a.996.996 0 0 0-1.41 0L8.21 5.38L13 10.17V7.5l3.15 3.15c.2.2.2.51 0 .71l-.98.98l3.45 3.45l3.09-3.09c.38-.38.38-1.01 0-1.41M6.79 6.79L3.51 3.51A.996.996 0 1 0 2.1 4.92L5.38 8.2l-3.09 3.09a.996.996 0 0 0 0 1.41l9 9c.39.39 1.02.39 1.41 0l3.09-3.09l3.28 3.28a.996.996 0 1 0 1.41-1.41zM9.99 14c0 .55-.45 1-1 1s-1-.45-1-1v-3c0-.05.02-.1.03-.15l1.97 1.97z");
}
</style><path class="b5rt0nq8m"/>`,
		"fallback": "ic:round-directions-off",
	});
}

export default Component;
