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
		"content": `<style>.qx09o2p9m {
  fill: currentColor;
  d: path("M4 20V4h2v16zm7 0v-4h2v4zm7 0V4h2v16zm-7-6v-4h2v4zm0-6V4h2v4z");
}
</style><path class="qx09o2p9m"/>`,
		"fallback": "material-symbols:road-outline-sharp",
	});
}

export default Component;
