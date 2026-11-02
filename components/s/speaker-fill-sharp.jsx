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
		"content": `<style>.ff-0qg0hi {
  fill: currentColor;
  d: path("M4 3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Zm8.01 3H12a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2M8 14a4 4 0 1 0 8 0a4 4 0 0 0-8 0");
}
</style><path class="ff-0qg0hi"/>`,
		"fallback": "coolicons:speaker-fill-sharp",
	});
}

export default Component;
