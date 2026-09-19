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
		"content": `<style>.ov-wf5bce {
  cx: 19px;
  cy: 3px;
  r: 3px;
  fill: currentColor;
}

.xcy1p8bcb {
  fill: currentColor;
  d: path("M6 8V6h9.03a4.9 4.9 0 0 1-.92-4H2.01L2 22l4-4h16V6.97C21.16 7.61 20.13 8 19 8zm8 6H6v-2h8zm4-3H6V9h12z");
}
</style><circle class="ov-wf5bce"/><path class="xcy1p8bcb"/>`,
		"fallback": "ic:sharp-mark-unread-chat-alt",
	});
}

export default Component;
