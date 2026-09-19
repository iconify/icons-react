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
		"content": `<style>.mntg6pjjg {
  fill: currentColor;
  d: path("m21.15 3.85l-.82.82l-.95-.96c-.39-.39-1.02-.39-1.42 0l-.96.96l-.96-.96c-.39-.39-1.03-.39-1.42 0l-.95.96l-.96-.96a.996.996 0 0 0-1.41 0l-.96.96l-.96-.96c-.39-.39-1.02-.39-1.42 0L7 4.67l-.96-.96c-.39-.39-1.03-.39-1.42 0l-.95.96l-.82-.82a.5.5 0 0 0-.85.36V19c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4.21a.5.5 0 0 0-.85-.36M11 19H4v-6h7zm9 0h-7v-2h7zm0-4h-7v-2h7zm0-4H4V8h16z");
}
</style><path class="mntg6pjjg"/>`,
		"fallback": "ic:round-newspaper",
	});
}

export default Component;
