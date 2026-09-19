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
		"content": `<style>.v0xc7c3zj {
  fill: currentColor;
  d: path("M21 5h-2.64l1.14-3.14L17.15 1l-1.46 4H3v2l2 6l-2 6v2h18v-2l-2-6l2-6zm-5 9h-3v3h-2v-3H8v-2h3V9h2v3h3z");
}
</style><path class="v0xc7c3zj"/>`,
		"fallback": "ic:sharp-local-pharmacy",
	});
}

export default Component;
