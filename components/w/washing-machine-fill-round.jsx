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
		"content": `<style>.yqd9lfbsz {
  fill: currentColor;
  d: path("M8 2h8a5 5 0 0 1 5 5v1H3V7a5 5 0 0 1 5-5m0 3a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Zm3.01 0H11a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2M21 10v7a5 5 0 0 1-1.464 3.536A5 5 0 0 1 16 22H8a5 5 0 0 1-5-5v-7ZM8 15a4 4 0 1 0 8 0a4 4 0 0 0-8 0m2 0a2 2 0 1 1 3.999-.001A2 2 0 0 1 10 15");
}
</style><path class="yqd9lfbsz"/>`,
		"fallback": "coolicons:washing-machine-fill-round",
	});
}

export default Component;
