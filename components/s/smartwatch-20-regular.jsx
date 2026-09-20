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
		"content": `<style>.pvifpsgpq {
  fill: currentColor;
  d: path("M6 5.268V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1.268A2 2 0 0 1 15 7v1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v2a2 2 0 0 1-1 1.732V16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1.268A2 2 0 0 1 5 13V7a2 2 0 0 1 1-1.732M8 3a1 1 0 0 0-1 1v1h6V4a1 1 0 0 0-1-1zm6 10V7a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v6a1 1 0 0 0 .999 1H13a1 1 0 0 0 1-1m-7 3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1H7z");
}
</style><path class="pvifpsgpq"/>`,
		"fallback": "fluent:smartwatch-20-regular",
	});
}

export default Component;
