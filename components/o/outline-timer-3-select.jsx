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
		"content": `<style>.dbi76wt5v {
  fill: currentColor;
  d: path("M21 11v2h-4v1h2.5c.83 0 1.5.68 1.5 1.5v2c0 .83-.67 1.5-1.5 1.5H15v-2h4v-1h-2.5c-.82 0-1.5-.68-1.5-1.5v-2c0-.82.68-1.5 1.5-1.5zM4 5v3h6v2.5H4v3h6V16H4v3h6c1.66 0 3-1.34 3-3v-1.9a2.1 2.1 0 0 0-2.1-2.1A2.1 2.1 0 0 0 13 9.9V8c0-1.66-1.34-3-3-3z");
}
</style><path class="dbi76wt5v"/>`,
		"fallback": "ic:outline-timer-3-select",
	});
}

export default Component;
