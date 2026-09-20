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
		"content": `<style>.bcx-abcpz {
  fill: currentColor;
  d: path("m17.35 19.289l-2.813-2.839l.688-.688l2.125 2.125l4.25-4.25l.688.713zM3 20.077V3h18v8.5h-1V4H4v13.644L5.65 16h6.85v1H6.077zM4 16v1.385V4z");
}
</style><path class="bcx-abcpz"/>`,
		"fallback": "material-symbols-light:mark-chat-read-outline-sharp",
	});
}

export default Component;
