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
		"content": `<style>.d4p58hb5p {
  fill: currentColor;
  d: path("M4 16h16V7.9A5 5 0 0 1 14.1 4H4z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.p40m5bbtg {
  fill: currentColor;
  d: path("M20 7.9c.74-.15 1.42-.48 2-.92V16c0 1.1-.9 2-2 2H6l-4 4V4c0-1.1.9-2 2-2h10.1c-.06.32-.1.66-.1 1s.04.68.1 1H4v12h16zM16 3c0 1.66 1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3");
}
</style><path class="d4p58hb5p"/><path class="p40m5bbtg"/>`,
		"fallback": "ic:twotone-mark-chat-unread",
	});
}

export default Component;
