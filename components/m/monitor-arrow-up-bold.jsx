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
		"content": `<style>.mdflevnce {
  fill: currentColor;
  d: path("M208 36H48a28 28 0 0 0-28 28v112a28 28 0 0 0 28 28h160a28 28 0 0 0 28-28V64a28 28 0 0 0-28-28m4 140a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V64a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Zm-40 52a12 12 0 0 1-12 12H96a12 12 0 0 1 0-24h64a12 12 0 0 1 12 12m-11.51-124.49a12 12 0 0 1-17 17L140 117v35a12 12 0 0 1-24 0v-35l-3.51 3.52a12 12 0 0 1-17-17l24-24a12 12 0 0 1 17 0Z");
}
</style><path class="mdflevnce"/>`,
		"fallback": "ph:monitor-arrow-up-bold",
	});
}

export default Component;
