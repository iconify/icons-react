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
		"content": `<style>.ck8wqu08j {
  fill: currentColor;
  d: path("M12 18H6l-4 4V4c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v7h-2V4H4v12h8zm11-3.66l-1.41-1.41l-4.24 4.24l-2.12-2.12l-1.41 1.41L17.34 20z");
}
</style><path class="ck8wqu08j"/>`,
		"fallback": "ic:outline-mark-chat-read",
	});
}

export default Component;
