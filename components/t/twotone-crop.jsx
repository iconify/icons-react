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
		"content": `<style>.meas6cc9r {
  fill: currentColor;
  d: path("M5 17c0 1.1.9 2 2 2h10v4h2v-4h4v-2H7V1H5v4H1v2h4zm14-2V7c0-1.1-.9-2-2-2H9v2h8v8z");
}
</style><path class="meas6cc9r"/>`,
		"fallback": "ic:twotone-crop",
	});
}

export default Component;
