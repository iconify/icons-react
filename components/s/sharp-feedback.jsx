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
		"content": `<style>.wm396wb7t {
  fill: currentColor;
  d: path("M22 2H2.01L2 22l4-4h16zm-9 12h-2v-2h2zm0-4h-2V6h2z");
}
</style><path class="wm396wb7t"/>`,
		"fallback": "ic:sharp-feedback",
	});
}

export default Component;
