import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ot3apc_as {
  fill: currentColor;
  d: path("m230.88 115.69l-168-95.88a14 14 0 0 0-20 16.87L73.66 128l-30.85 91.33A14 14 0 0 0 56 238a14.15 14.15 0 0 0 6.93-1.83l167.91-96.07a14 14 0 0 0 0-24.41Zm-5.95 14L57 225.73a2 2 0 0 1-2.86-2.42a.4.4 0 0 0 0-.1L84.3 134H144a6 6 0 0 0 0-12H84.3L54.17 32.8a.3.3 0 0 0 0-.1a1.87 1.87 0 0 1 .6-2.2a1.85 1.85 0 0 1 2.23-.25l168 95.89a1.93 1.93 0 0 1 1 1.74a2 2 0 0 1-1.07 1.78Z");
}
</style><path class="ot3apc_as"/>`,
		"fallback": "ph:paper-plane-right-light",
	});
}

export default Component;
