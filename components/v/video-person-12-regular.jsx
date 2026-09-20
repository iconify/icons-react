import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ec988g6pq {
  fill: currentColor;
  d: path("M6 7a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0-1a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1M1 3.5A1.5 1.5 0 0 1 2.5 2h7A1.5 1.5 0 0 1 11 3.5v5A1.5 1.5 0 0 1 9.5 10h-7A1.5 1.5 0 0 1 1 8.5zM2.5 3a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5H4v-.5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1V9h1.5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5zM7 9v-.5H5V9z");
}
</style><path class="ec988g6pq"/>`,
		"fallback": "fluent:video-person-12-regular",
	});
}

export default Component;
