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
		"content": `<style>.h8atucppv {
  fill: currentColor;
  d: path("M3 19h18v-6H3zm0-8h18V9H3zm0-6v2h18V5z");
}
</style><path class="h8atucppv"/>`,
		"fallback": "ic:sharp-horizontal-split",
	});
}

export default Component;
