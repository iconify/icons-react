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
		"content": `<style>.thf00h5wg {
  fill: currentColor;
  d: path("M5 4h14a3 3 0 0 1 3 3v6H2V7a3 3 0 0 1 3-3m6 16H5a3 3 0 0 1-3-3v-2h9Zm11-5v2a3 3 0 0 1-3 3h-6v-5Z");
}
</style><path class="thf00h5wg"/>`,
		"fallback": "coolicons:touchpad-fill",
	});
}

export default Component;
