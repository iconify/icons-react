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
		"content": `<style>.fv9wbobjt {
  fill: currentColor;
  d: path("M3 21h2v-2H3zM5 7H3v2h2zM3 17h2v-2H3zm4 4h2v-2H7zM5 3H3v2h2zm4 0H7v2h2zm8 0h-2v2h2zm-4 4h-2v2h2zm0-4h-2v2h2zm6 14h2v-2h-2zm-8 4h2v-2h-2zm-8-8h18v-2H3zM19 3v2h2V3zm0 6h2V7h-2zm-8 8h2v-2h-2zm4 4h2v-2h-2zm4 0h2v-2h-2z");
}
</style><path class="fv9wbobjt"/>`,
		"fallback": "ic:outline-border-horizontal",
	});
}

export default Component;
