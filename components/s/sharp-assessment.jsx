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
		"content": `<style>.igydykg9y {
  fill: currentColor;
  d: path("M21 3H3v18h18zM9 17H7v-7h2zm4 0h-2V7h2zm4 0h-2v-4h2z");
}
</style><path class="igydykg9y"/>`,
		"fallback": "ic:sharp-assessment",
	});
}

export default Component;
