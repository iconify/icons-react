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
		"content": `<style>.m0r0v9brq {
  fill: currentColor;
  d: path("M15 15H3v2h12zm0-8H3v2h12zM3 13h18v-2H3zm0 8h18v-2H3zM3 3v2h18V3z");
}
</style><path class="m0r0v9brq"/>`,
		"fallback": "ic:sharp-format-align-left",
	});
}

export default Component;
