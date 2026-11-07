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
		"content": `<style>.ppx4xxr9x {
  fill: currentColor;
  d: path("M2 7c0-1.33.522-2.597 1.464-3.536A5 5 0 0 1 7 2a1 1 0 0 1 0 2a2.98 2.98 0 0 0-2.121.879A2.98 2.98 0 0 0 4 7a1 1 0 0 1-2 0m15-5c1.33 0 2.597.522 3.536 1.464A5 5 0 0 1 22 7a1 1 0 0 1-2 0a2.98 2.98 0 0 0-.879-2.121A2.98 2.98 0 0 0 17 4a1 1 0 0 1 0-2M4.168 11.445c4.4-6.597 11.264-6.597 15.664 0a1 1 0 0 1 0 1.11c-4.4 6.597-11.264 6.597-15.664 0a1 1 0 0 1 0-1.11M17.779 12c-3.442-4.664-8.116-4.664-11.558 0c3.442 4.664 8.116 4.664 11.558 0M12 11h.01a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2M7 22a4.98 4.98 0 0 1-3.536-1.464A5 5 0 0 1 2 17a1 1 0 0 1 2 0a2.98 2.98 0 0 0 .879 2.121A2.98 2.98 0 0 0 7 20a1 1 0 0 1 0 2m15-5c0 1.33-.522 2.597-1.464 3.536A5 5 0 0 1 17 22a1 1 0 0 1 0-2a2.98 2.98 0 0 0 2.121-.879A2.98 2.98 0 0 0 20 17a1 1 0 0 1 2 0");
}
</style><path class="ppx4xxr9x"/>`,
		"fallback": "coolicons:scan-eye-fill-round",
	});
}

export default Component;
