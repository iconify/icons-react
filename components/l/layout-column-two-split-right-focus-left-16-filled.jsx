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
		"content": `<style>.ogeud_cio {
  fill: currentColor;
  d: path("M2 4.5A2.5 2.5 0 0 1 4.5 2h7A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5zM8 3v4.5h5v-3A1.5 1.5 0 0 0 11.5 3zm0 5.5V13h3.5a1.5 1.5 0 0 0 1.5-1.5v-3z");
}
</style><path class="ogeud_cio"/>`,
		"fallback": "fluent:layout-column-two-split-right-focus-left-16-filled",
	});
}

export default Component;
