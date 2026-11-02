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
		"content": `<style>.y-d78hkpq {
  fill: currentColor;
  d: path("M8 11h8V4a1 1 0 0 1 2 0v16a1 1 0 0 1-2 0v-7H8v7a1 1 0 0 1-2 0V4a1 1 0 0 1 2 0Z");
}
</style><path class="y-d78hkpq"/>`,
		"fallback": "coolicons:letter-h-bulk-round",
	});
}

export default Component;
