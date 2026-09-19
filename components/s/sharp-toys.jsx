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
		"content": `<style>.wky2sjbnx {
  fill: currentColor;
  d: path("m18.72 10l-2-6H7.28L5.81 8.4L4.41 7l1-1L4 4.59L.59 8L2 9.41l1-1L4.59 10H2v8h2.18A3 3 0 0 0 7 20c1.3 0 2.4-.84 2.82-2h4.37c.41 1.16 1.51 2 2.82 2a3 3 0 0 0 2.82-2H22v-8zM7 18c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m4-8H7.41l-.02-.02L8.72 6H11zm2 0V6h2.28l1.33 4zm4 8c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1");
}
</style><path class="wky2sjbnx"/>`,
		"fallback": "ic:sharp-toys",
	});
}

export default Component;
