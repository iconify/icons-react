import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ulycckbft {
  fill: currentColor;
  d: path("M18 10a8 8 0 1 1-16 0a8 8 0 0 1 16 0m-1.5 0a6.47 6.47 0 0 0-1.404-4.035l-9.131 9.131A6.5 6.5 0 0 0 16.5 10M4.904 14.035l9.131-9.131a6.5 6.5 0 0 0-9.131 9.131");
}
</style><path class="ulycckbft"/>`,
		"fallback": "fluent:prohibited-20-filled",
	});
}

export default Component;
