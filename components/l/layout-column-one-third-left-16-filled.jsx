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
		"content": `<style>.hezqkzbyw {
  fill: currentColor;
  d: path("M6 14h5.5a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 11.5 2H6zM5 2h-.5A2.5 2.5 0 0 0 2 4.5v7A2.5 2.5 0 0 0 4.5 14H5z");
}
</style><path class="hezqkzbyw"/>`,
		"fallback": "fluent:layout-column-one-third-left-16-filled",
	});
}

export default Component;
