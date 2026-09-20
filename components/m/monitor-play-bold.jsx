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
		"content": `<style>.y6tl2cc1s {
  fill: currentColor;
  d: path("M168 120a12 12 0 0 1-5.12 9.83l-40 28A12 12 0 0 1 104 148V92a12 12 0 0 1 18.88-9.83l40 28A12 12 0 0 1 168 120m68-56v112a28 28 0 0 1-28 28H48a28 28 0 0 1-28-28V64a28 28 0 0 1 28-28h160a28 28 0 0 1 28 28m-24 0a4 4 0 0 0-4-4H48a4 4 0 0 0-4 4v112a4 4 0 0 0 4 4h160a4 4 0 0 0 4-4Zm-52 152H96a12 12 0 0 0 0 24h64a12 12 0 0 0 0-24");
}
</style><path class="y6tl2cc1s"/>`,
		"fallback": "ph:monitor-play-bold",
	});
}

export default Component;
