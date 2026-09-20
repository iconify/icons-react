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
		"content": `<style>.ekdywcb4q {
  fill: currentColor;
  d: path("M3 6.25A3.25 3.25 0 0 1 6.25 3h11.5A3.25 3.25 0 0 1 21 6.25V8.5H3zM8 7a1 1 0 1 0 0-2a1 1 0 0 0 0 2m5-1a1 1 0 1 0-2 0a1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0a1 1 0 0 0 2 0M3 17.75V10h18v7.75A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75M7.25 12C6.56 12 6 12.56 6 13.25v3.5c0 .69.56 1.25 1.25 1.25h9.5c.69 0 1.25-.56 1.25-1.25v-3.5c0-.69-.56-1.25-1.25-1.25z");
}
</style><path class="ekdywcb4q"/>`,
		"fallback": "fluent:oven-24-filled",
	});
}

export default Component;
