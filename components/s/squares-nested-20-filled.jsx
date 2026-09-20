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
		"content": `<style>.p7qwflbht {
  fill: currentColor;
  d: path("M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v1.764A3 3 0 0 0 15 7h-5a3 3 0 0 0-3 3v5c0 .768.289 1.47.764 2H6a3 3 0 0 1-3-3zm7 11h4a3 3 0 0 0 3-3v-4a2 2 0 0 0-2-2h-5a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2");
}
</style><path class="p7qwflbht"/>`,
		"fallback": "fluent:squares-nested-20-filled",
	});
}

export default Component;
