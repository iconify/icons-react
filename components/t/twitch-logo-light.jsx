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
		"content": `<style>.cw8a2sb4m {
  fill: currentColor;
  d: path("M208 34H48a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h18v34a6 6 0 0 0 9.84 4.61L122.17 206h42.93a14 14 0 0 0 9-3.25L217 167a14 14 0 0 0 5-10.76V48a14 14 0 0 0-14-14m2 122.25a2 2 0 0 1-.72 1.54l-42.9 35.75a2 2 0 0 1-1.28.46H120a6 6 0 0 0-3.84 1.39L78 227.19V200a6 6 0 0 0-6-6H48a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2ZM174 88v48a6 6 0 0 1-12 0V88a6 6 0 0 1 12 0m-48 0v48a6 6 0 0 1-12 0V88a6 6 0 0 1 12 0");
}
</style><path class="cw8a2sb4m"/>`,
		"fallback": "ph:twitch-logo-light",
	});
}

export default Component;
