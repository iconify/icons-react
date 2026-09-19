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
		"content": `<style>.c9u-rma7q {
  fill: currentColor;
  d: path("M5.41 20L17 8.41V15h2V5H9v2h6.59L4 18.59z");
}
</style><path class="c9u-rma7q"/>`,
		"fallback": "ic:twotone-call-made",
	});
}

export default Component;
