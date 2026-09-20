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
		"content": `<style>.fcqkg0b2r {
  fill: currentColor;
  d: path("M10 4a2 2 0 1 1 .492 1.313L5.956 7.581a2 2 0 0 1 0 .838l4.536 2.268a2 2 0 1 1-.447.894L5.507 9.313a2 2 0 1 1 0-2.626l4.536-2.268A2 2 0 0 1 10 4");
}
</style><path class="fcqkg0b2r"/>`,
		"fallback": "fluent:share-android-16-filled",
	});
}

export default Component;
