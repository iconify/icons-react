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
		"content": `<style>.eycf-0bzd {
  fill: currentColor;
  d: path("M9.829 19a3 3 0 0 1-5.7-.128A3.005 3.005 0 0 1 2 16v-6a5 5 0 0 1 5-5h6c.265 0 .52.105.707.293L17.414 9H19a3 3 0 0 1 3 3v4c0 1.32-.866 2.487-2.128 2.872a3 3 0 0 1-5.701.128ZM9 7H7a3 3 0 0 0-3 3v1h5Zm3.586 0H11v4h5.586ZM6.291 18.705l.002.002l.002.002a1 1 0 0 0 1.41 0l.002-.002l.002-.002a1 1 0 0 0 0-1.41l-.002-.002l-.002-.002a1 1 0 0 0-1.41 0l-.002.002l-.002.002a1 1 0 0 0 0 1.41m11.414.004l.002-.002l.002-.002a1 1 0 0 0 0-1.41l-.002-.002l-.002-.002a1 1 0 0 0-1.41 0l-.002.002l-.002.002a1 1 0 0 0 1.414 1.414");
}
</style><path class="eycf-0bzd"/>`,
		"fallback": "coolicons:suv-fill-round",
	});
}

export default Component;
