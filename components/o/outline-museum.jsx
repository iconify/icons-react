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
		"content": `<style>.hozlc6d5l {
  fill: currentColor;
  d: path("M22 11V9L12 2L2 9v2h2v9H2v2h20v-2h-2v-9zm-4 9H6V9h12z");
}

.z0jfpcbwl {
  fill: currentColor;
  d: path("m10 14l2 3l2-3v4h2v-7h-2l-2 3l-2-3H8v7h2z");
}
</style><path class="hozlc6d5l"/><path class="z0jfpcbwl"/>`,
		"fallback": "ic:outline-museum",
	});
}

export default Component;
