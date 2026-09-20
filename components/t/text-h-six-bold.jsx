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
		"content": `<style>.e3-y0kbsu {
  fill: currentColor;
  d: path("m217.06 140.33l13.24-22.18a12 12 0 1 0-20.6-12.3l-32.25 54c-.09.15-.17.31-.25.47a40 40 0 1 0 39.86-20ZM212 196a16 16 0 1 1 16-16a16 16 0 0 1-16 16M156 56v120a12 12 0 0 1-24 0v-48H52v48a12 12 0 0 1-24 0V56a12 12 0 0 1 24 0v48h80V56a12 12 0 0 1 24 0");
}
</style><path class="e3-y0kbsu"/>`,
		"fallback": "ph:text-h-six-bold",
	});
}

export default Component;
