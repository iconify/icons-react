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
		"content": `<style>.dcqia5evy {
  fill: currentColor;
  d: path("M3 3v18h18V3zm6 14H7v-7h2zm4 0h-2V7h2zm4 0h-2v-4h2z");
}
</style><path class="dcqia5evy"/>`,
		"fallback": "ic:sharp-poll",
	});
}

export default Component;
