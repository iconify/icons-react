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
		"content": `<style>.nntxqqbqd {
  fill: currentColor;
  d: path("m17.35 20l-3.525-3.55l1.4-1.4l2.125 2.125l4.25-4.25L23 14.35zM2 22V2h20v9h-2V4H4v13.125L5.15 16H12v2H6zm2-6V4z");
}
</style><path class="nntxqqbqd"/>`,
		"fallback": "material-symbols:mark-chat-read-outline-sharp",
	});
}

export default Component;
