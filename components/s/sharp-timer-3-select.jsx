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
		"content": `<style>.zev-vkbqo {
  fill: currentColor;
  d: path("M21 11v2h-4v1h4v5h-6v-2h4v-1h-4v-5zM4 5v3h6v2.5H4v3h6V16H4v3h9V5z");
}
</style><path class="zev-vkbqo"/>`,
		"fallback": "ic:sharp-timer-3-select",
	});
}

export default Component;
