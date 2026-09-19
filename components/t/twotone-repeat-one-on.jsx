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
		"content": `<style>.c5s_e9bbh {
  fill: currentColor;
  d: path("M21 1H3c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2m-2 18H7v3l-4-4l4-4v3h10v-4h2zm-9-8.5V9h3v6h-1.5v-4.5zm7-.5V7H7v4H5V5h12V2l4 4z");
}
</style><path class="c5s_e9bbh"/>`,
		"fallback": "ic:twotone-repeat-one-on",
	});
}

export default Component;
