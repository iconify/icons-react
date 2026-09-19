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
		"content": `<style>.bo7acll6w {
  fill: currentColor;
  d: path("M14 2H4c-1.1 0-2 .9-2 2v10h2V4h10zm4 4H8c-1.1 0-2 .9-2 2v10h2V8h10zm2 4h-8c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2m0 10h-8v-8h8z");
}
</style><path class="bo7acll6w"/>`,
		"fallback": "ic:outline-auto-awesome-motion",
	});
}

export default Component;
