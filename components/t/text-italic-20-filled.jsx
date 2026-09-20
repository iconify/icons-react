import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.u9xu7qbaw {
  fill: currentColor;
  d: path("M8 3.25a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-3.235L8.592 15.5h2.658a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5h3.235L11.408 4H8.75A.75.75 0 0 1 8 3.25");
}
</style><path class="u9xu7qbaw"/>`,
		"fallback": "fluent:text-italic-20-filled",
	});
}

export default Component;
