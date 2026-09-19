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
		"content": `<style>.mschcvpgs {
  fill: currentColor;
  d: path("M13 21h-2V6.83L9.41 8.41L8 7l4-4l4 4l-1.41 1.41L13 6.83V9c0 4.27 4.03 7.13 6 8.27l-1.46 1.46c-1.91-1.16-3.44-2.53-4.54-4.02z");
}
</style><path class="mschcvpgs"/>`,
		"fallback": "ic:outline-ramp-left",
	});
}

export default Component;
