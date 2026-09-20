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
		"content": `<style>.oos__8bfc {
  fill: currentColor;
  d: path("M2 4a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v1h1a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-1H4a2 2 0 0 1-2-2zm8 0a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h1V7a2 2 0 0 1 2-2h3zM6 9.707V10h1.293L10 7.293V6h-.293zM8.293 6H7a1 1 0 0 0-1 1v1.293zM11 9a2 2 0 0 1-.04.403A2 2 0 0 1 9 11H6v1a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-1zm-2.293 1H9a1 1 0 0 0 1-1v-.293z");
}
</style><path class="oos__8bfc"/>`,
		"fallback": "fluent:shape-intersect-16-regular",
	});
}

export default Component;
