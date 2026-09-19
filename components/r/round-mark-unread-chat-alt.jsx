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
		"content": `<style>.nku2io5ym {
  fill: currentColor;
  d: path("M7 8c-.55 0-1-.45-1-1s.45-1 1-1h8.03a4.9 4.9 0 0 1-.92-4H4.01a2 2 0 0 0-2 2L2 19.58c0 .89 1.08 1.34 1.71.71L6 18h14c1.1 0 2-.9 2-2V6.97C21.16 7.61 20.13 8 19 8zm6 6H7c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1m4-3H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1");
}

.ov-wf5bce {
  cx: 19px;
  cy: 3px;
  r: 3px;
  fill: currentColor;
}
</style><circle class="ov-wf5bce"/><path class="nku2io5ym"/>`,
		"fallback": "ic:round-mark-unread-chat-alt",
	});
}

export default Component;
