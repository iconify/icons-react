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
		"content": `<style>.yci2sccsq {
  fill: currentColor;
  d: path("m21.41 9.41l-2.83-2.83c-.37-.37-.88-.58-1.41-.58H9V5c0-.55-.45-1-1-1s-1 .45-1 1v1h-.17c-.53 0-1.04.21-1.42.59L2.59 9.41c-.38.38-.59.89-.59 1.42V17c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-6.17c0-.53-.21-1.04-.59-1.42M14 17H4v-5h10zm6 0h-4v-6.17l2-2l2 2z");
}
</style><path class="yci2sccsq"/>`,
		"fallback": "ic:round-gite",
	});
}

export default Component;
