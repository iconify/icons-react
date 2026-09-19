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
		"content": `<style>.xbkkanbuj {
  fill: currentColor;
  d: path("M20 4v12H5.17L4 17.17V4zm0-2H4c-1.1 0-2 .9-2 2v15.59c0 .89 1.08 1.34 1.71.71L6 18h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2");
}
</style><path class="xbkkanbuj"/>`,
		"fallback": "ic:round-chat-bubble-outline",
	});
}

export default Component;
