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
		"content": `<style>.uw5vu58kl {
  fill: currentColor;
  d: path("M19 9.998H5v-2h14zm0 6H5v-2h14z");
}
</style><path class="uw5vu58kl"/>`,
		"fallback": "ic:sharp-equals",
	});
}

export default Component;
