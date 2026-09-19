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
		"content": `<style>.c5mnrrb_v {
  fill: currentColor;
  d: path("M4 17.17L5.17 16H20V4H4zM7 7c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v1.99L17 7v6l-2-1.99V13c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.fsvml0b0a {
  fill: currentColor;
  d: path("M8 14h6c.55 0 1-.45 1-1v-1.99L17 13V7l-2 1.99V7c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1");
}

.w43srvb8p {
  fill: currentColor;
  d: path("M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H5.17L4 17.17V4h16z");
}
</style><path class="c5mnrrb_v"/><path class="w43srvb8p"/><path class="fsvml0b0a"/>`,
		"fallback": "ic:twotone-video-chat",
	});
}

export default Component;
