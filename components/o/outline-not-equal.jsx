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
		"content": `<style>.qukdhgbip {
  fill: currentColor;
  d: path("m14.08 4.605l1.84.79l-6 14l-1.84-.79z");
}

.uw5vu58kl {
  fill: currentColor;
  d: path("M19 9.998H5v-2h14zm0 6H5v-2h14z");
}
</style><path class="uw5vu58kl"/><path class="qukdhgbip"/>`,
		"fallback": "ic:outline-not-equal",
	});
}

export default Component;
