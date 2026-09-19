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
		"content": `<style>.mtifbgitp {
  fill: currentColor;
  d: path("M14 7h-4c-1.1 0-2 .9-2 2v6h2v7h4v-7h2V9c0-1.1-.9-2-2-2m-2-5.249L14.248 4L12 6.248L9.75 4z");
}
</style><path class="mtifbgitp"/>`,
		"fallback": "ic:twotone-man-3",
	});
}

export default Component;
