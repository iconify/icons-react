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
		"content": `<style>.g1_khlb9p {
  fill: currentColor;
  d: path("M14.77 9L12 12.11L9.23 9zM21 3H3v2l8 9v5H6v2h12v-2h-5v-5l8-9zM7.43 7L5.66 5h12.69l-1.78 2z");
}
</style><path class="g1_khlb9p"/>`,
		"fallback": "ic:outline-local-bar",
	});
}

export default Component;
