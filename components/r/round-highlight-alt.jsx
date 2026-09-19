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
		"content": `<style>.ktevq8hrt {
  fill: currentColor;
  d: path("M17 5h-2V3h2zm2 4h2V7h-2zm0 4h2v-2h-2zm-8 8h2v-2h-2zM7 5h2V3H7zM3 17h2v-2H3zm2 4v-2H3c0 1.1.9 2 2 2M19 3v2h2c0-1.1-.9-2-2-2m-8 2h2V3h-2zM3 9h2V7H3zm4 12h2v-2H7zm-4-8h2v-2H3zm0-8h2V3c-1.1 0-2 .9-2 2m15.71 12.29l1.44-1.44c.32-.32.09-.85-.35-.85H16c-.55 0-1 .45-1 1v3.79c0 .45.54.67.85.35l1.44-1.44l2 2a.996.996 0 1 0 1.41-1.41z");
}
</style><path class="ktevq8hrt"/>`,
		"fallback": "ic:round-highlight-alt",
	});
}

export default Component;
