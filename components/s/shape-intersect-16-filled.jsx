import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.y6u-z5r2d {
  fill: currentColor;
  d: path("M2 4a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v1h1a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-1H4a2 2 0 0 1-2-2zm8 0a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h1V7a2 2 0 0 1 2-2h3zm-4 7v1a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-1v3a2 2 0 0 1-2 2z");
}
</style><path class="y6u-z5r2d"/>`,
		"fallback": "fluent:shape-intersect-16-filled",
	});
}

export default Component;
