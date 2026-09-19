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
		"content": `<style>.x0kjlvfhm {
  fill: currentColor;
  d: path("M17 12h2L12 2L5.05 12H7l-3.9 6h6.92v4h3.96v-4H21z");
}
</style><path class="x0kjlvfhm"/>`,
		"fallback": "ic:sharp-park",
	});
}

export default Component;
