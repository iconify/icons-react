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
		"content": `<style>.rtm7dzbtt {
  fill: currentColor;
  d: path("M172 208a4 4 0 0 1-4 4H88a4 4 0 0 1-3.2-6.4l71.94-95.92a36 36 0 1 0-57.49-43.34A36.6 36.6 0 0 0 95 73.61a4 4 0 0 1-7.33-3.21a44.4 44.4 0 0 1 5.2-8.87a44 44 0 0 1 70.28 53L96 204h72a4 4 0 0 1 4 4");
}
</style><path class="rtm7dzbtt"/>`,
		"fallback": "ph:number-two-thin",
	});
}

export default Component;
