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
		"content": `<style>.t90nip5if {
  fill: currentColor;
  d: path("m6 14l3 3v5h6v-5l3-3V9H6zm5-12h2v3h-2zM3.5 5.88l1.41-1.41l2.12 2.12L5.62 8zm13.46.71l2.12-2.12l1.41 1.41L18.38 8z");
}
</style><path class="t90nip5if"/>`,
		"fallback": "ic:sharp-highlight",
	});
}

export default Component;
