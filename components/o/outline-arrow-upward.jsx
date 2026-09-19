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
		"content": `<style>.aikwr8n5r {
  fill: currentColor;
  d: path("m4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8z");
}
</style><path class="aikwr8n5r"/>`,
		"fallback": "ic:outline-arrow-upward",
	});
}

export default Component;
