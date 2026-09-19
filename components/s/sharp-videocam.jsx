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
		"content": `<style>.efk3_mi9r {
  fill: currentColor;
  d: path("M17 10.5V6H3v12h14v-4.5l4 4v-11z");
}
</style><path class="efk3_mi9r"/>`,
		"fallback": "ic:sharp-videocam",
	});
}

export default Component;
