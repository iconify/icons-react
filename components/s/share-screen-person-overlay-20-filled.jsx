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
		"content": `<style>.j9xd-o97r {
  fill: currentColor;
  d: path("M2 7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v3.341a3 3 0 1 0-4.727 3.67A2.5 2.5 0 0 0 11.05 16H5a3 3 0 0 1-3-3zm2 0v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1m13.5 5a2 2 0 1 1-4 0a2 2 0 0 1 4 0m1.5 4.5c0 1.245-1 2.5-3.5 2.5S12 17.75 12 16.5a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5");
}
</style><path class="j9xd-o97r"/>`,
		"fallback": "fluent:share-screen-person-overlay-20-filled",
	});
}

export default Component;
