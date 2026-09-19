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
		"content": `<style>.mbu6i0b0w {
  fill: currentColor;
  d: path("M23 3H1v16h7v2h8v-2h6.99zm-2 14H3V5h18zm-5-6l-7 4V7z");
}
</style><path class="mbu6i0b0w"/>`,
		"fallback": "ic:sharp-ondemand-video",
	});
}

export default Component;
