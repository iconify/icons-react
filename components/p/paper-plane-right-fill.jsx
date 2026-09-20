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
		"content": `<style>.c_0f1dbcp {
  fill: currentColor;
  d: path("M240 127.89a16 16 0 0 1-8.18 14L63.9 237.9A16.15 16.15 0 0 1 56 240a16 16 0 0 1-15-21.33l27-79.95a4 4 0 0 1 3.72-2.72H144a8 8 0 0 0 8-8.53a8.19 8.19 0 0 0-8.26-7.47h-72a4 4 0 0 1-3.79-2.72l-27-79.94a16 16 0 0 1 22.89-19.27l168 95.89a16 16 0 0 1 8.16 13.93");
}
</style><path class="c_0f1dbcp"/>`,
		"fallback": "ph:paper-plane-right-fill",
	});
}

export default Component;
