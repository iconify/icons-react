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
		"content": `<style>.e2g-wac0l {
  fill: currentColor;
  d: path("M12.03 17.5c-.02.17-.03.33-.03.5H6l-4 4V2h20v8.68A6.995 6.995 0 0 0 12 17c0 .17.01.33.03.5M23 14.34l-1.41-1.41l-4.24 4.24l-2.12-2.12l-1.41 1.41L17.34 20z");
}
</style><path class="e2g-wac0l"/>`,
		"fallback": "ic:sharp-mark-chat-read",
	});
}

export default Component;
