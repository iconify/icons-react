import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.x851jobsh {
  fill: currentColor;
  d: path("M4.176 2.164c-1.188-.594-2.505.536-2.099 1.8l2.858 8.884a1 1 0 0 0 .787.68l11.869 1.979a.5.5 0 0 1 .253.116A8.96 8.96 0 0 1 23 14a8.98 8.98 0 0 1 6.664 2.951c.575-.702.41-1.84-.494-2.292zM5.723 18.47l10.894-1.816A8.97 8.97 0 0 0 14 23q.001.944.187 1.833L4.176 29.838c-1.188.594-2.506-.536-2.099-1.801l2.858-8.886a1 1 0 0 1 .788-.68M23 30.5a7.5 7.5 0 1 1 0-15a7.5 7.5 0 0 1 0 15M22.75 18a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h3.5a.75.75 0 0 0 0-1.5H23.5v-3.75a.75.75 0 0 0-.75-.75");
}
</style><path class="x851jobsh"/>`,
		"fallback": "fluent:send-clock-32-filled",
	});
}

export default Component;
