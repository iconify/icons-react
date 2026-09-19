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
		"content": `<style>.mhu-l6bxi {
  fill: currentColor;
  d: path("M11.49 3.48c0 1.1.9 2 2 2s2-.9 2-2s-.9-2-2-2s-2 .9-2 2m-.6 11.5l2.1 2v6h2v-7.5l-2.1-2l.6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1c-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7l-1.6 8.1l-4.9-1l-.4 2l7 1.4z");
}
</style><path class="mhu-l6bxi"/>`,
		"fallback": "ic:twotone-directions-run",
	});
}

export default Component;
