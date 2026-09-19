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
		"content": `<style>.dv-82bbeb {
  fill: currentColor;
  d: path("M22 2H2v20l4-4h16zm-2 14H6l-2 2V4h16z");
}
</style><path class="dv-82bbeb"/>`,
		"fallback": "ic:sharp-chat-bubble-outline",
	});
}

export default Component;
