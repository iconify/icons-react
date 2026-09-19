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
		"content": `<style>.u1zw9fbcm {
  fill: currentColor;
  d: path("M5 5c0-1.1.9-2 2-2h7a5.002 5.002 0 0 0 5 7.9v8.58c0 .72-.73 1.2-1.39.92L12 18l-5.61 2.4A.994.994 0 0 1 5 19.48zm17.07-1.66c.39.39.39 1.02 0 1.41l-3.54 3.54a.996.996 0 0 1-1.41 0l-1.41-1.41a.996.996 0 1 1 1.41-1.41l.71.71l2.83-2.83c.39-.4 1.02-.4 1.41-.01");
}
</style><path class="u1zw9fbcm"/>`,
		"fallback": "ic:round-bookmark-added",
	});
}

export default Component;
