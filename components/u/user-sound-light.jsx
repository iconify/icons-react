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
		"content": `<style>.rx2lxqh8p {
  fill: currentColor;
  d: path("M139 166.26a66 66 0 1 0-62 0c-22 6.22-41.88 19.15-57.61 37.88a6 6 0 0 0 9.18 7.72C49.11 187.45 77.31 174 108 174s58.9 13.45 79.41 37.86a6 6 0 1 0 9.18-7.72C180.86 185.41 161 172.48 139 166.26M54 108a54 54 0 1 1 54 54a54.06 54.06 0 0 1-54-54m151.52-41.61a106.33 106.33 0 0 1 0 83.22a6 6 0 0 1-11-4.71a94.3 94.3 0 0 0 0-73.8a6 6 0 0 1 11-4.71M246 108a137.2 137.2 0 0 1-11.12 54.37a6 6 0 0 1-11-4.74a126.4 126.4 0 0 0 0-99.26a6 6 0 0 1 11-4.74A137.2 137.2 0 0 1 246 108");
}
</style><path class="rx2lxqh8p"/>`,
		"fallback": "ph:user-sound-light",
	});
}

export default Component;
