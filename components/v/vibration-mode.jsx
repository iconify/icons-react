import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.f2dbtlxmu {
  fill: var(--svg-color--f4900c, #f4900c);
  d: path("M36 32c0 4-4 4-4 4H4c-4 0-4-4-4-4V4c0-4 4-4 4-4h28s4 0 4 4z");
}

.h-t2100ni {
  fill: var(--svg-color--fff, #fff);
  d: path("M24 3H12C9 3 9 6 9 6v24c0 3 3 3 3 3h12c3 0 3-3 3-3V6c0-3-3-3-3-3m1 25H11V8h14zM2 15v5l5-2v-1zm1-2l4 2v-2l-4-3zm0 9l4-2v2l-4 3zm31-7v5l-5-2v-1zm-1-2l-4 2v-2l4-3zm0 9l-4-2v2l4 3z");
}
</style><path class="f2dbtlxmu"/><path class="h-t2100ni"/>`,
		"fallback": "twemoji:vibration-mode",
	});
}

export default Component;
