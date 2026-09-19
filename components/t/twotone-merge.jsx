import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.lpjazun7z {
  fill: currentColor;
  d: path("M6.41 21L5 19.59l4.83-4.83c.75-.75 1.17-1.77 1.17-2.83v-5.1L9.41 8.41L8 7l4-4l4 4l-1.41 1.41L13 6.83v5.1c0 1.06.42 2.08 1.17 2.83L19 19.59L17.59 21L12 15.41z");
}
</style><path class="lpjazun7z"/>`,
		"fallback": "ic:twotone-merge",
	});
}

export default Component;
