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
		"content": `<style>.ppo1ivb-f {
  fill: currentColor;
  d: path("M18.83 16H20V4H6.83l-2-2H20c1.1 0 2 .9 2 2v15.17zM18 6H8.83l2 2H18zm0 3h-6.17l2 2H18zm0 5v-2h-3.17l2 2zm3.9 7.9l-1.41 1.41L15.17 18H4c-1.1 0-2-.9-2-2V4.83L.69 3.51L2.1 2.1zM13.17 16l-2-2H6v-2h3.17l-1-1H6V9h.17L4 6.83V16z");
}
</style><path class="ppo1ivb-f"/>`,
		"fallback": "ic:outline-comments-disabled",
	});
}

export default Component;
