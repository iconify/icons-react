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
		"content": `<style>.kfgrg9zie {
  fill: currentColor;
  d: path("M5 6a1 1 0 0 1 1-1h15a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1m4 12a1 1 0 0 1 1-1h11a1 1 0 1 1 0 2H10a1 1 0 0 1-1-1m-6-7a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2z");
}
</style><path class="kfgrg9zie"/>`,
		"fallback": "fluent:text-align-right-24-filled",
	});
}

export default Component;
