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
		"content": `<style>.nte2fjbmq {
  fill: currentColor;
  d: path("M3 19h18v2H3zM3 7h12v2H3zm0-4h18v2H3zm0 12h12v2H3zm0-4h18v2H3z");
}
</style><path class="nte2fjbmq"/>`,
		"fallback": "ic:twotone-format-align-left",
	});
}

export default Component;
