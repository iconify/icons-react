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
		"content": `<style>.f0sbcgbep {
  fill: currentColor;
  d: path("M20 8.69V4h-4.69L12 .69L8.69 4H4v4.69L.69 12L4 15.31V20h4.69L12 23.31L15.31 20H20v-4.69L23.31 12zm-2 5.79V18h-3.52L12 20.48L9.52 18H6v-3.52L3.52 12L6 9.52V6h3.52L12 3.52L14.48 6H18v3.52L20.48 12zM12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6m0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4s4 1.79 4 4s-1.79 4-4 4");
}

.h_ihj6bfk {
  cx: 12px;
  cy: 12px;
  r: 2.5px;
  fill: currentColor;
}
</style><path class="f0sbcgbep"/><circle class="h_ihj6bfk"/>`,
		"fallback": "ic:outline-brightness-high",
	});
}

export default Component;
