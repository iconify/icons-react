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
		"content": `<style>.jpmdgm50e {
  fill: currentColor;
  d: path("M21 7h-6V5h6zm-4 10.97l-5-2.14l-5 2.14V5h6.1c.15-.74.46-1.42.9-2H7c-1.1 0-2 .9-2 2v16l7-3l7 3V10.9c-.32.07-.66.1-1 .1s-.68-.03-1-.1z");
}

.k7rvm8xuf {
  fill: currentColor;
  d: path("M17 17.97V10.9A5 5 0 0 1 13 6c0-.34.03-.68.1-1H7v12.97l5-2.14z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="k7rvm8xuf"/><path class="jpmdgm50e"/>`,
		"fallback": "ic:twotone-bookmark-remove",
	});
}

export default Component;
